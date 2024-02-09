import "./App.css";

function App() {
  return (
    <div>
      <h1>Bagaimana Cara Deploy Sebuah React App</h1>
      <div className = "body">
      Deployment adalah proses memindahkan aplikasi React dari lingkungan
      pengembangan ke lingkungan produksi, sehingga dapat diakses oleh pengguna.
      Untuk melakukan deployment dalam React, terdapat beberapa langkah umum
      yang dapat diikuti. Berikut adalah langkah-langkah untuk melakukan
      deployment dalam React:
      <br></br>
      <ol>
        <li>
          Buatlah Aplikasi. Langkah pertama adalah membuat aplikasi React
          menggunakan perintah npx create-react-app nama-aplikasi.
        </li>
        <li>
          Buatlah Build Produksi. Sebelum melakukan deployment, Anda perlu
          membuat build produksi dari aplikasi React. Hal ini dapat dilakukan
          dengan menggunakan perintah npm run build. Proses ini akan
          mengoptimalkan aplikasi untuk lingkungan produksi dengan mengompres
          file-file dan menghilangkan kode yang tidak diperlukan.
        </li>
        <li>
          Pilih Platform Hosting. Setelah build produksi selesai, Anda perlu
          memilih platform hosting untuk mendeploy aplikasi React Anda. Beberapa
          pilihan platform hosting yang umum digunakan antara lain AWS Amplify,
          Hostinger, Azure Static Web Apps, Heroku, dan Railway
        </li>
        <li>
          Unggah File Aplikasi. Langkah terakhir adalah mengunggah file build
          produksi aplikasi React ke platform hosting yang telah Anda pilih.
        </li>
      </ol>
      Setelah file-file tersebut diunggah, aplikasi Anda akan dapat diakses
        secara publik. Beberapa platform hosting seperti AWS Amplify, Hostinger,
        dan Azure Static Web Apps menawarkan panduan langkah demi langkah untuk
        melakukan deployment aplikasi React. Selain itu, platform-platform ini
        juga menyediakan layanan otomatis untuk melakukan deployment ulang
        setiap kali terdapat perubahan kode. Hal ini memudahkan pengembang untuk
        melakukan deployment tanpa harus melakukan konfigurasi tambahan.
        </div>
    </div>
  );
}

export default App;
