export default function handler(req, res) {
    if (req.method === 'POST') {
      const {number, name, email, message, phone } = req.body;
  
      // Validate the form fields
      if (!name || !email || !message || !phone) {
        return res.status(400).json({ error: 'Please fill in all fields before sending.' });
      }
  
      const whatsappURL = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(phone)}%0AMessage:%20${encodeURIComponent(message)}`;
  
      return res.status(200).json({ url: whatsappURL });
    } else {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  