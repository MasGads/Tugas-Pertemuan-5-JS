const readline = require("readline");

let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
    { id: 4, nama: "Monitor", harga: 1500000, stok: 4 },
    { id: 5, nama: "Flashdisk", harga: 100000, stok: 20 }
];

const tampilkanProduk = () => {
    console.log("\nDaftar Produk:");
    produkToko.forEach(({ id, nama, harga, stok }) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga.toLocaleString()}, Stok: ${stok}`);
    });
};

const tambahProduk = (...produkBaru) => {
    produkToko = [...produkToko, ...produkBaru];
    console.log("\nProduk berhasil ditambahkan!\n");
    tampilkanProduk();
};

const hapusProduk = (id) => {
    produkToko = produkToko.filter(produk => produk.id !== id);
    console.log(`\nProduk dengan ID ${id} berhasil dihapus!\n`);
    tampilkanProduk();
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tampilkanMenu = () => {
    console.log("\nPilih aksi:");
    console.log("1. Tampilkan Produk");
    console.log("2. Tambah Produk");
    console.log("3. Hapus Produk");
    console.log("4. Keluar");
    rl.question("\nMasukkan pilihan Anda: ", (jawaban) => {
        if (jawaban === "1") {
            tampilkanProduk();
            tampilkanMenu();
        } else if (jawaban === "2") {
            rl.question("\nMasukkan nama produk: ", (nama) => {
                rl.question("Masukkan harga produk: ", (harga) => {
                    rl.question("Masukkan stok produk: ", (stok) => {
                        tambahProduk({ id: produkToko.length + 1, nama, harga: parseInt(harga), stok: parseInt(stok) });
                        tampilkanMenu();
                    });
                });
            });
        } else if (jawaban === "3") {
            rl.question("\nMasukkan ID produk yang ingin dihapus: ", (id) => {
                hapusProduk(parseInt(id));
                tampilkanMenu();
            });
        } else if (jawaban === "4") {
            console.log("\nTerima kasih! Program selesai.");
            rl.close();
        } else {
            console.log("\nPilihan tidak valid! Silakan pilih kembali.");
            tampilkanMenu();
        }
    });
};

tampilkanMenu();
