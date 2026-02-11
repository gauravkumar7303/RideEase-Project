import { MongoClient, ServerApiVersion } from 'mongodb';

export async function GET() {
  console.log('🔍 Testing MongoDB Atlas Connection from Next.js...');
  
  // Use the same connection string that worked in your test
  const uri = "mongodb+srv://gauravk7303_db_user:Hw6X7EylM23aB7d1@rideeaseprojectcluster.iuuqsuo.mongodb.net/?appName=RideeaseProjectCluster";
  
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    serverSelectionTimeoutMS: 10000,
  });

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB Atlas!');
    
    // Ping to test connection
    await client.db("admin").command({ ping: 1 });
    
    // Use your database
    const database = client.db("rideease"); // Yahan database name dalo
    
    // Test collection
    const testCollection = database.collection("testUsers");
    
    // Insert test document
    const result = await testCollection.insertOne({
      name: "Test User from Next.js",
      email: "test@nextjs.com",
      timestamp: new Date()
    });
    
    // Read all documents
    const documents = await testCollection.find({}).toArray();
    
    return Response.json({
      success: true,
      message: "✅ MongoDB Atlas Connection Successful from Next.js!",
      insertedId: result.insertedId,
      totalDocuments: documents.length,
      documents: documents,
      connection: {
        database: database.databaseName,
        host: client.options.srvHost
      }
    });
    
  } catch (error) {
    console.error('❌ Error in Next.js:', error.message);
    console.error('❌ Full error:', error);
    
    return Response.json({
      success: false,
      error: error.message,
      errorType: error.name,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
    
  } finally {
    await client.close();
    console.log('🔌 Connection closed');
  }
}