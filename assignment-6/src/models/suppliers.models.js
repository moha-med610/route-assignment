export const suppliersTable = async (db) => {
  await db.execute(`
        CREATE TABLE IF NOT EXISTS
            suppliers(
	            supplier_id INT PRIMARY KEY AUTO_INCREMENT,
                supplier_name TEXT,
                contact_number TEXT 
            );
    `);
};
