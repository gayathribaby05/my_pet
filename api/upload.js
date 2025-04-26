export default async function handler(req, res) {
    if (req.method === "POST") {
      const { title, description, image } = req.body;
  
      console.log("Received data:", { title, description, image });
  
      return res.status(200).json({ message: "Data received!" });
    }
  
    return res.status(405).json({ message: "Method not allowed" });
  }