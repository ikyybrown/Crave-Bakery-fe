<script setup>
import { ref, computed } from 'vue'

const produk = ref([
  { kode: 'SE1809', nama: 'Sourdough', kategori: 'Makanan', harga: 'Rp. 35.000', stok: 18 },
  { kode: 'JU2606', nama: 'Cookies', kategori: 'Makanan', harga: 'Rp. 15.000', stok: 3 },
  { kode: 'SE2709', nama: 'Shortcake', kategori: 'Makanan', harga: 'Rp. 50.000', stok: 20 },
  { kode: 'MA2003', nama: 'Matcha', kategori: 'Minuman', harga: 'Rp. 15.000', stok: 25 },
  { kode: 'CR1001', nama: 'Croissant', kategori: 'Makanan', harga: 'Rp. 25.000', stok: 15 },
  { kode: 'BR2002', nama: 'Brownies', kategori: 'Makanan', harga: 'Rp. 20.000', stok: 10 },
  { kode: 'MT3003', nama: 'Milk Tea', kategori: 'Minuman', harga: 'Rp. 18.000', stok: 30 },
  { kode: 'CC4004', nama: 'Choco Cake', kategori: 'Makanan', harga: 'Rp. 50.000', stok: 8 },
  { kode: 'LM5005', nama: 'Cheesecake', kategori: 'Makanan', harga: 'Rp. 50.000', stok: 12 },
  { kode: 'ES6006', nama: 'Expresso', kategori: 'Minuman', harga: 'Rp. 19.000', stok: 20 },
  { kode: 'BG7007', nama: 'Tiramisu Creamy', kategori: 'Makanan', harga: 'Rp. 35.000', stok: 14 },
  { kode: 'CN8008', nama: 'Cinnamon Roll', kategori: 'Makanan', harga: 'Rp. 28.000', stok: 9 },
  { kode: 'SP9009', nama: 'Cappuccino', kategori: 'Minuman', harga: 'Rp. 15.000', stok: 16 },
  { kode: 'MF1010', nama: 'Curros', kategori: 'Makanan', harga: 'Rp. 18.000', stok: 22 },
  { kode: 'WF1011', nama: 'Waffle', kategori: 'Makanan', harga: 'Rp. 32.000', stok: 7 },
  { kode: 'CL1012', nama: 'Dubai Chewy Cookie', kategori: 'Makanan', harga: 'Rp. 45.000', stok: 18 },
])


const perHalaman = 4
const halaman = ref(1)
const totalHalaman = computed(() => Math.ceil(produk.value.length / perHalaman))
const produkh = computed(() => {
  const start = (halaman.value - 1) * perHalaman
  return produk.value.slice(start, start + perHalaman)
})
</script>

<template>
  <section id="center">
    <div class="header">
      <h1>CRAVÈ BAKERY</h1>
    </div>

    <div class="container">
      <button class="add-button">+ Tambah Produk</button>

      <div class="body">
        <div class="search-wrapper">
          <input type="text" placeholder="🔍Cari produk..." class="search-input" />
          <div class="batong">
              <button class="btn-import">⇩ Import</button>
              <button class="btn-export">⇧ Export</button>
          </div>
        </div>
        <div class="kategori">
          <h3>Kategori:
            <select class="dropdown">
              <option>Semua Kategori</option>
              <option>Makanan</option>
              <option>Minuman</option>
            </select>
          </h3>
        </div>
      </div>

      <table class="product-table">
        <thead>
          <tr>
            <th></th>
            <th>Kode</th>
            <th>Nama Produk</th>
            <th>Kategori</th>
            <th>Harga</th>
            <th>Stok</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in produkh" :key="item.kode">
            <td><div class="item-box"></div></td>
            <td>{{ item.kode }}</td>
            <td>{{ item.nama }}</td>
            <td>{{ item.kategori }}</td>
            <td>{{ item.harga }}</td>
            <td>{{ item.stok }}</td>
            <td>
              <button class="btn-edit">Edit</button>
              <button class="btn-hapus">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="pagination">
        <h4>Menampilkan {{ produkh.length }} dari {{ produkh.length }} produk</h4>
        <div class="page-controls">
            <h4> Halaman {{ halaman }} dari {{ totalHalaman }}</h4>
            <button class="btn-prev" @click="halaman--" :disabled="halaman === 1">Prev</button>
            <div class="page-number">{{ halaman }}</div>
            <button class="btn-next" @click="halaman++" :disabled="halaman === totalHalaman">Next</button>
          </div>
        </div>

    </div>
  </section>
</template>

<style scoped>
.container {
    background: rgb(237, 222, 215);
    padding: 40px;
    border-radius: 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    height: 400px;
    width: 68rem;
    margin-top: -0.5rem;
    justify-content: flex-start;
  align-items: flex-start;
  padding-top: 2rem;
  padding-left: 2rem;
}

.header {
  width: 68.5rem;
  height: 1.5rem;
  background-color: rgb(216, 191, 180);
  padding: 1rem 2rem;
   border-bottom: 1.7px solid rgb(94, 82, 75);

}

h1 {
    font-size: 2rem;
    margin-top: -0.5rem;
    color: #333;
    margin-left: -55rem;
    
}

button {
    background-color: rgb(115, 101, 94);
    color: rgb(230, 219, 214);
    width: auto;
    height: 1.8rem;
    padding: 0 1rem;
    border-radius: 20px;
    margin-bottom: 1rem;
    margin-top: -1.5rem;
             font-family: 'Times New Roman', Times, serif;
             gap: 2rem;

}

.search-input {
  background-color: rgb(115, 101, 94);
  width: 30rem;
    margin-top: 0.5rem;
    margin-left: 1.9rem;
  height: 2rem;
  font-family: 'Times New Roman', Times, serif;
  margin-right: 15rem;
  
}
.search-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
   
}
.search-input::placeholder {
  color: rgb(230, 219, 214);

}
.batong {
  display: flex;
  gap: 0.5rem;
  margin-top: 2.2rem;
  margin-right: 2rem;
}
.button-batong {
  height: 7rem;
}
.body { 
  width: 72.5rem;
  height: 6rem;
  background-color: rgb(216, 191, 180);
  margin-left: -2rem;
  border-radius: 0;
  margin-top: -0.3rem;
  border-top: 1.7px solid rgb(94, 82, 75);
  border-bottom: 1.7px solid rgb(94, 82, 75);
}

.kategori h3{
    margin-top: -0.5rem;
    margin-left: 1.7rem;
    padding: 0.5rem;
    border-radius: 5px;
   color: #333;
   display: flex;
   align-items: center;

}
.dropdown {
   color: rgb(230, 219, 214);
    background-color: rgb(115, 101, 94);
    border-radius: 4rem;
       font-family: 'Times New Roman', Times, serif;
       margin-left: 5px;
       width: 7.9rem;
       height: 1.8rem;
       font-size: 15px;
}

.item-box {
    width: 30px;
    height: 30px;
    background-color: rgb(195, 173, 163);
    border: 1.5px solid rgb(102, 91, 84);
    border-radius: 0;
    margin-right: -2rem;
}

.product-table {
  width: 72.5rem;
  margin-left: -2rem;
  border-collapse: collapse;
  margin-top: 0.1rem;

}

.product-table td {
  text-align: center;
    padding: 0.75rem;
    font-size: 0.990rem;
    color: #333;
    
}

.product-table th {
  text-align: center;
    padding: 0.75rem;
    font-size: 1.5rem;
    color: #333;
    margin-top: 2px;
   
}
.product-table th:first-child,
.product-table td:first-child {
  text-align: left;
  color: #333;
}

.btn-edit{
   border-radius: 0%;
   margin-right: 0.3rem;
   width: 4.5rem;
   margin-top: 1px;
   margin-bottom: -3px;
}
.btn-hapus{
   border-radius: 0%;
   margin-right: -1rem;
   width: 4.5rem;
   margin-top: 1px;
   margin-bottom: -3px;
}
.product-table thead tr {
  border-bottom: 1.7px solid rgb(94, 82, 75);
}
.product-table tbody tr {
  border-bottom: 1.7px solid rgb(94, 82, 75);
}

h4 {
    margin-left: 0.3rem;
    color: rgb(79, 68, 62);
    margin-top: 1rem;
}
.pagination {
  display: flex;
  align-items: center;;
  margin-top: -0.5rem;
  
}
.pagination button {
  background-color: rgb(115, 101, 94);
  color: rgb(230, 219, 214);
  border-radius: 0;
   font-family: 'Times New Roman', Times, serif;
   width: auto;
   height: 1.8rem;
  padding: 0.5rem 1rem;
  display: flex;
  margin-top: 0.4rem;
  margin-left: 20px;
 
}
.page-controls {
  margin-left: 35rem; 
  color: rgb(79, 68, 62);
  display: flex;
  margin-top: 1rem;
}

.page-number {
  background-color: rgb(195, 173, 163);
  height: 0.8rem;
  padding: 0.5rem;
  margin-right: -20px;
  margin-top: 0.4rem;
}
</style>