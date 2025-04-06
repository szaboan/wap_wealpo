CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    price NUMERIC NOT NULL
);

INSERT INTO products (name, category, price) VALUES
('27" LG 27QP88DP-BS LCD monitor', 'Monitor', 250560),
('SAL BT 5000 Bluetooth Hangszóró, Fekete', 'Hangszóró', 23990),
('Canon Pixma MG2551S Tintasugaras nyomtató, Szürke', 'Nyomtató', 18389),
('Apple iPhone 14 128GB - Kék', 'Mobiltelefon', 293676),
('Samsung Galaxy Tab S8 128GB WiFi - Ezüst', 'Tablet', 249990),
('Sony WH-1000XM5 Vezeték nélküli fejhallgató', 'Fejhallgató', 149990),
('Dell XPS 13 9310 Ultrabook', 'Laptop', 599990),
('Xiaomi Mi Smart Band 7 Okoskarkötő', 'Okoskarkötő', 19990),
('Philips Hue White and Color Ambiance LED izzó', 'Okosizzó', 24990),
('GoPro HERO11 Black Akciókamera', 'Akciókamera', 179990),
('Logitech MX Master 3S Egér', 'Egér', 39990),
('Asus ROG Strix RTX 3080 Ti Videókártya', 'Videókártya', 599990),
('Bose SoundLink Revolve+ II Bluetooth Hangszóró', 'Hangszóró', 119990),
('Samsung 980 Pro 1TB NVMe SSD', 'SSD', 59990);