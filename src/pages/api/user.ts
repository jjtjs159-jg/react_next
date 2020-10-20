export default function handler(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.end(
        JSON.stringify({
            name: 'John Doe',
        }),
    );
}
