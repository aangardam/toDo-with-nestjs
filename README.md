Aplikasi crud to-do dengan nestjs & mysql

- Clone project
- Arahkan ke folder project
- npm install
- Atur database di .env
- Jalankan apliaksi dengan perintah nest start --watch
- Dan dokumentasinya bisa dilihat (http://localhost:5000/api/docs)

Api yang ada

- / [GET] : Menampilkan kata `hello word`
- /to-do [GET] : Menampilkan semua data to-do yang sudah dibuat
- /to-do [POST] : Menyimpan atau menambah data to-do
- /to-do/:id [PATCH] : Mengubah data to-do
- /to-do/:id [DELETE] : Menghapus data to-do
- /to-do/update-status/:id [PATCH] : Ada dua kegunaan 1). Mengubah status body request nya status 2). Assign pic body req nya pic
