import React from 'react'
import { bosscha,farmHouse,geografis,history } from './import'
import './article.css'

export default function Article() {
    return (
    <div className='container'>
        <article className='sejarah'>
            <section> 
                <h2 id='sejarah'>Sejarah</h2>
                <img src={history} alt=''/>
                <p lang='id' translate='no'>Kata Bandung berasal dari kata bendung atau bendungan karena terbendungnya sungai Citarum oleh lava Gunung Tangkuban Parahu yang lalu membentuk telaga. Legenda yang diceritakan oleh orang-orang tua di
                Bandung mengatakan bahwa nama Bandung diambil dari sebuah kendaraan air yang terdiri dari dua perahu yang diikat berdampingan yang disebut perahu bandung yang digunakan oleh Bupati Bandung, R.A. Wiranatakusumah II, untuk melayari Ci Tarum dalam mencari tempat kedudukan kabupaten yang baru untuk
                menggantikan ibu kota yang lama di Dayeuhkolot. </p>

            <p>Berdasarkan filosofi Sunda, kata Bandung juga berasal dari kalimat Nga-Bandung-an Banda Indung, yang merupakan kalimat sakral dan luhur karena mengandung nilai ajaran Sunda. Nga-Bandung-an artinya menyaksikan atau bersaksi. Banda adalah segala sesuatu yang berada di alam hidup yaitu di bumi dan atmosfer, baik makhluk hidup maupun benda mati. Sinonim dari banda adalah harta. Indung berarti Ibu atau Bumi, disebut juga sebagai Ibu Pertiwi tempat Banda berada.</p>

        
                </section>
                <section> 
            <h2 id='geografis'>Geografis</h2>
            <img src={geografis} alt=''/>
            <p>Kota Bandung dikelilingi oleh pegunungan, sehingga bentuk morfologi wilayahnya bagaikan sebuah mangkok raksasa, secara geografis kota ini terletak di tengah-tengah provinsi Jawa Barat, serta berada pada
                ketinggian ±768 m di atas permukaan laut, dengan titik tertinggi di berada di sebelah utara dengan ketinggian 1.050 meter di atas permukaan laut dan sebelah selatan merupakan kawasan rendah dengan ketinggian 675 meter di atas permukaan laut.</p>

            <p>Kota Bandung dialiri dua sungai utama, yaitu Sungai Cikapundung dan Sungai Citarum beserta anak-anak sungainya yang pada umumnya mengalir ke arah selatan dan bertemu di Sungai Citarum. Dengan kondisi yang
                demikian, Bandung selatan sangat rentan terhadap masalah banjir terutama pada musim hujan.</p>

            </section>
            <section>    
            <h2 id='wisata'>Wisata</h2>
            <p>Sejak dibukanya Jalan Tol Cipularang, kota Bandung telah menjadi tujuan utama dalam menikmati liburan akhir pekan terutama dari masyarakat yang berasal dari Jakarta sekitarnya. Selain menjadi kota wisata belanja,
                kota Bandung juga dikenal dengan sejumlah besar bangunan lama berarsitektur peninggalan Belanda.</p>
            </section>
        </article>
        <h3>Farm House Lembang</h3>
        <img src={farmHouse} alt=''/>
        <p>Berada di jalur utama Bandung-Lembang, Farm House menjadi objek wisata yang tidak pernah sepi pengunjung. Selain karena letaknya strategis, kawasan ini juga menghadirkan nuansa wisata khas Eropa. Semua itu diterapkan dalam bentuk spot swafoto Instagramable.</p>

        <h3>Observatorium Bosscha</h3>
        <img src={bosscha} alt=''/>
        <p>Memiliki beberapa teleskop, antara lain, Refraktor Ganda Zeiss, Schmidt Bimasakti, Refraktor Bamberg, Cassegrain GOTO, dan Teleskop Surya. Refraktor Ganda Zeiss adalah jenis teleskop terbesar untuk meneropong bintang. Benda ini diletakkan pada atap kubah sehingga saat teropong digunakan, atap tersebut harus dibuka. Observatorium Bosscha boleh dikunjungi oleh siapapun, tanpa tiket. Namun, bagi yang ingin
            menggunakan teleskop Zeiss, wajib mendaftarkan diri. Untuk instansi atau lembaga pendidikan, diberikan jadwal hari Selasa sampai Jumat. Sementara itu, kunjungan individu dibuka setiap hari Sabtu.</p>

        <blockquote cite='https://id.wikipedia.org/wiki/Situs_web'>
            <p>Situs web (bahasa Inggris: website) adalah sekumpulan halaman web yang saling berhubungan yang umumnya berada pada peladen yang sama berisikan kumpulan informasi yang disediakan secara perorangan, kelompok, atau organisasi.</p>
        </blockquote>

        <figure>
            <img src="https://github.com/dicodingacademy/BelajarDasarPemrogramanWeb/raw/image-assets/dicoding-logo.png" alt="Sicoding Logo" width="200px"/>
            <figcaption>Dicoding</figcaption>
        </figure >
        <p>Hubungi kami di</p>
        <ul>
            <li><a href="https://example.com">Website</a></li>
            <li><a href="mailto:info@example.com">Email</a></li>
            <li><a href="tel:+62123456">Telepon</a></li>
            <li><a href="#address">Alamat</a></li>
        </ul>
        <footer>
            <p>Belajar Dasar Pemrograman Web</p>
        </footer>
    </div>
    )
}
