<script setup>

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
</div>
<div class="kategori">
    <h3>Kategori:
        <div class="dropdown-wrapper">
    <select class="dropdown">
  <option>Semua Kategori</option>
  <option>Makanan</option>
  <option>Minuman</option>
</select>
</div>
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
    <tr>
      <td><div class="item-box"></div></td>
      <td>SE1809</td>
      <td>Sourdough</td>
      <td>Makanan</td>
      <td>Rp. 35.000</td>
      <td>18</td>
      <td>
        <button class="btn-edit">Edit</button>
        <button class="btn-hapus">Hapus</button>
      </td>
    </tr>
    <tr>
      <td><div class="item-box"></div></td>
      <td>JU2606</td>
      <td>Cookies</td>
      <td>Makanan</td>
      <td>Rp. 15.000</td>
      <td>3</td>
      <td>
        <button class="btn-edit">Edit</button>
        <button class="btn-hapus">Hapus</button>
      </td>
    </tr>
      <tr>
      <td><div class="item-box"></div></td>
      <td>SE2709</td>
      <td>Shortcake</td>
      <td>Makanan</td>
      <td>Rp. 50.000</td>
      <td>20</td>
      <td>
       <button class="btn-edit">Edit</button>
        <button class="btn-hapus">Hapus</button>
      </td>
    </tr>
     <tr>
      <td><div class="item-box"></div></td>
      <td>MA2003</td>
      <td>Matcha</td>
      <td>Minuman</td>
      <td>Rp. 15.000</td>
      <td>25</td>
      <td>
        <button class="btn-edit">Edit</button>
        <button class="btn-hapus">Hapus</button>
      </td>
    </tr>
</tbody>
</table>
</div>
<h4>Menampilkan 4 dari 15 produk</h4>
</section>
</template>

<style scoped>
.container {
    background: rgb(218, 207, 202);
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
  height: 2rem;
  background-color: rgb(195, 173, 163);
  padding: 1rem 2rem;
  overflow: hidden;
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
}

.search-wrapper {
    width: 30rem;
    margin-top: 0.5rem;
    margin-left: 1.9rem;
    color: rgb(79, 68, 62);
}
.body { 
  width: 72.5rem;
  height: 6rem;
  background-color: rgb(195, 173, 163);
  margin-left: -2rem;
  border-radius: 0;
  margin-top: -0.3rem;
}

.kategori h3{
    margin-top: 0.4rem;
    margin-left: 1.9rem;
    padding: 0.5rem;
    border-radius: 5px;
   color: #675a4e;
   display: flex;
   align-items: center;
   
}
.dropdown {
   color: rgb(230, 219, 214);
    background-color: rgb(115, 101, 94);
    border-radius: 4rem;
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
  margin-bottom: 4rem;
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
    margin-left: 1.9rem;
    color: rgb(79, 68, 62);
    margin-top: -4rem;
}
</style>