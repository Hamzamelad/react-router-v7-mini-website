import sequelize from "./db";

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    process.exit(0); // success exit
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // error exit
  }
}

const syncDb = async () => {
  try {
    await sequelize.sync();
    console.error('tables created successfully!');
    process.exit(1); // error exit
  } catch (error) {
    console.error('Unable to create tables:', error);
    process.exit(1); // error exit
  }
}

testConnection();
syncDb();