export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Perform your backend logic here, like sending an email or saving to a database

        res.status(200).json({ message: 'Message sent successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
