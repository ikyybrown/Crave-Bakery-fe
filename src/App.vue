<script setup>
import { ref, computed } from 'vue'

const showSuccessModal = ref(false)

const products = ref([
  {
    id: 1,
    name: 'Croissant Butter',
    price: 15000,
    qty: 1,
    image: '🥐',
  },
  {
    id: 2,
    name: 'Chocolate Bread',
    price: 18000,
    qty: 2,
    image: '🍞',
  },
  {
    id: 3,
    name: 'Cheese Roll',
    price: 16000,
    qty: 1,
    image: '🧀',
  },
  {
    id: 4,
    name: 'Donut Chocolate',
    price: 12000,
    qty: 2,
    image: '🍩',
  },
  {
    id: 5,
    name: 'Milk Bread',
    price: 14000,
    qty: 1,
    image: '🍞',
  },
])

const note = ref('')
const discount = ref(0)
const paid = ref(115500)

const subtotal = computed(() => {
  return products.value.reduce((acc, item) => {
    return acc + item.price * item.qty
  }, 0)
})

const tax = computed(() => subtotal.value * 0.1)

const total = computed(() => {
  return subtotal.value + tax.value
})

const change = computed(() => {
  return paid.value - total.value
})

const totalItem = computed(() => {
  return products.value.reduce((acc, item) => acc + item.qty, 0)
})

const increaseQty = (item) => {
  item.qty++
}

const decreaseQty = (item) => {
  if (item.qty > 1) {
    item.qty--
  }
}

const deleteItem = (id) => {
  products.value = products.value.filter((item) => item.id !== id)
}

const clearAll = () => {
  products.value = []
}

const finishTransaction = () => {
  showSuccessModal.value = true
}

const closeModal = () => {
  showSuccessModal.value = false
}

const formatRupiah = (value) => {
  return new Intl.NumberFormat('id-ID').format(value)
}
</script>

<template>
 <div
  class="min-h-screen p-6 bg-cover bg-center"
  style="background-image: url('/images/bg-bakery.png')"
>

    <!-- HEADER -->
    <div class="bg-white border rounded-2xl p-5 flex justify-between items-center mb-5">
      <h1 class="text-4xl font-serif">
        CRAVÉ BAKERY
      </h1>

      <button class="text-xl">
        Keluar
      </button>
    </div>

    <div class="grid grid-cols-3 gap-5">

      <!-- LEFT -->
      <div class="col-span-2 bg-white rounded-2xl p-5 border">

        <h1 class="text-3xl font-bold mb-1">
          TRANSAKSI BARU
        </h1>

        <p class="text-gray-500 mb-5">
          Tambah produk yang dibeli pelanggan.
        </p>

        <!-- SEARCH -->
        <div class="flex gap-3 mb-5">
          <input
            type="text"
            placeholder="Cari produk..."
            class="border rounded-xl px-4 py-3 w-full"
          >

          <button class="bg-amber-700 text-white px-5 rounded-xl">
            + Tambah Produk
          </button>
        </div>

        <!-- TABLE -->
        <table class="w-full">

          <thead class="bg-[#f6f1eb]">
            <tr>
              <th class="p-3">No</th>
              <th>Produk</th>
              <th>Harga</th>
              <th>Qty</th>
              <th>Subtotal</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(item, index) in products"
              :key="item.id"
              class="border-b"
            >
              <td class="p-4 text-center">
                {{ index + 1 }}
              </td>

              <td>
                <div class="flex items-center gap-3">
                  <div class="text-4xl">
                    {{ item.image }}
                  </div>

                  <span>
                    {{ item.name }}
                  </span>
                </div>
              </td>

              <td>
                Rp {{ formatRupiah(item.price) }}
              </td>

              <td>
                <div class="flex items-center gap-3 border rounded-xl px-3 py-2 w-fit">
                  
                  <button @click="decreaseQty(item)">
                    -
                  </button>

                  <span>
                    {{ item.qty }}
                  </span>

                  <button @click="increaseQty(item)">
                    +
                  </button>
                </div>
              </td>

              <td>
                Rp {{ formatRupiah(item.price * item.qty) }}
              </td>

              <td>
                <button
                  class="text-red-500"
                  @click="deleteItem(item.id)"
                >
                  🗑
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- FOOT -->
        <div class="flex justify-between mt-5">

          <button
            class="border border-red-300 text-red-500 px-4 py-2 rounded-xl"
            @click="clearAll"
          >
            Hapus Semua
          </button>

          <div>
            Total Item : {{ totalItem }}
          </div>
        </div>

        <!-- NOTE -->
        <div class="mt-6">
          <h1 class="mb-2 font-semibold">
            Catatan (opsional)
          </h1>

          <textarea
            v-model="note"
            placeholder="Tulis catatan jika ada..."
            class="border rounded-xl w-full p-4 h-28"
          />
        </div>
      </div>

      <!-- RIGHT -->
      <div class="bg-white rounded-2xl p-5 border h-fit">

        <h1 class="text-2xl font-bold mb-6">
          RINGKASAN PEMBAYARAN
        </h1>

        <div class="space-y-5">

          <div class="flex justify-between">
            <span>Subtotal ({{ totalItem }} item)</span>
            <span>Rp {{ formatRupiah(subtotal) }}</span>
          </div>

          <div class="flex justify-between items-center">

            <span>Diskon</span>

            <select
              v-model="discount"
              class="border rounded-lg px-3 py-2"
            >
              <option value="0">0%</option>
              <option value="10">10%</option>
            </select>
          </div>

          <div class="flex justify-between">
            <span>Pajak (10%)</span>
            <span>Rp {{ formatRupiah(tax) }}</span>
          </div>

          <hr>

          <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold">
              TOTAL
            </h1>

            <h1 class="text-4xl font-bold text-amber-800">
              Rp {{ formatRupiah(total) }}
            </h1>
          </div>

          <div>
            <p class="mb-2">
              Dibayar (Tunai)
            </p>

            <input
              v-model="paid"
              type="number"
              class="border rounded-xl w-full p-4 text-2xl"
            >
          </div>

          <div class="flex justify-between">
            <span class="text-xl">
              Kembalian
            </span>

            <span class="text-3xl font-bold text-green-600">
              Rp {{ formatRupiah(change) }}
            </span>
          </div>

          <div class="bg-[#f8f3ed] p-4 rounded-xl border text-sm">
            Pembayaran hanya dapat dilakukan secara tunai.
          </div>

          <button
            @click="finishTransaction"
            class="bg-amber-800 text-white w-full py-4 rounded-2xl text-xl font-semibold"
          >
            Selesaikan Transaksi
          </button>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-3xl p-8 w-[500px]">

        <div class="text-center mb-6">

          <div class="text-7xl text-green-500 mb-4">
            ✔
          </div>

          <h1 class="text-4xl font-bold mb-2">
            Transaksi Berhasil!
          </h1>

          <p class="text-gray-500">
            Pembayaran telah diterima secara tunai.
          </p>
        </div>

        <div class="border rounded-2xl p-5 mb-5">

          <div class="flex justify-between mb-3">
            <span>No. Transaksi</span>
            <span>TRX-240525-001</span>
          </div>

          <div class="flex justify-between mb-3">
            <span>Tanggal & Waktu</span>
            <span>24 Mei 2025 10:30</span>
          </div>

          <hr class="my-4">

          <div class="flex justify-between mb-3">
            <span>Total</span>

            <span class="font-bold">
              Rp {{ formatRupiah(total) }}
            </span>
          </div>

          <div class="flex justify-between mb-3">
            <span>Dibayar</span>

            <span>
              Rp {{ formatRupiah(paid) }}
            </span>
          </div>

          <div class="flex justify-between">
            <span>Kembalian</span>

            <span class="text-green-600 font-bold">
              Rp {{ formatRupiah(change) }}
            </span>
          </div>
        </div>

        <div class="flex gap-3">

          <button
            class="border w-full py-3 rounded-xl"
          >
            Cetak Ulang
          </button>

          <button
            @click="closeModal"
            class="bg-amber-800 text-white w-full py-3 rounded-xl"
          >
            Transaksi Baru
          </button>
        </div>
      </div>
    </div>
  </div>
</template>