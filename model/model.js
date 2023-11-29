const { Client } = require("pg");

class Post {
  fetchValue = async (email) => {
    try {
      // Create a new client instance
      const client = new Client({
        host: "monitoring.route24x7.com",
        port: 5432,
        user: "postgres",
        password: "Monit@365",
        database: "postgres",
      });

      // Connect to the PostgreSQL database
      await client.connect();
      console.log("Connected to the PostgreSQL database");

      const sqlStatement = `SELECT full_name, phone_number, location, updated_at,email  FROM Digital.business_card WHERE email = $1;`;
      const queryResult = await client.query(sqlStatement, [email]);
      const result = queryResult.rows;
      console.log("Query result:", result);

      // Close the client connection
      await client.end();

      if (result.length > 0) {
        return result;
      } else {
        return null; // Return null or handle empty result accordingly
      }
    } catch (err) {
      console.error("Error executing the PostgreSQL query:", err);
      return false; // Return false or handle the error accordingly
    }
  };
}

module.exports = Post;
