# shop-anything-lagos
This is the BACKEND DEVELOPER INTERNSHIP ASSESSMENT

PART 2
1. Given the requirements, we need to design tables to store merchants, products, and possibly relationships between them if needed.
ENTITY RELATIONSHIP DESCRIPTION
Merchant Table - Stores Merchant Details
    - merchantId => primary key, unique identifier for each merchant.
    - firstName => first name of the merchant
    - lastName => last name of the merchant
    - contactInfo => Contact Information of the Merchant
Products Table - Stores Product Details
    - skuId => Primary Key, Unique Identitifer provided by the merchant for each product
    - merchantId => Foreign key, links to the Merchants table.
    - name => Name of the product.
    - description => Description of the product.
    - price => Price of the product.

Performance Considerations
For performance, especially with a large number of merchants and products:

Use indexes on frequently queried columns such as merchantId in the Products table to speed up lookups.
Consider partitioning the Products table by merchantId if the database supports it, to improve query performance across different merchants.

2. A SQL database like PostgreSQL or MySQL is suitable due to the structured nature of the data and the relationships between merchants and products. However, if scalability and flexibility in the data model are priorities, a NoSQL database like MongoDB could be considered.