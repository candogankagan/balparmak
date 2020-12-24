import React from 'react'
import bread from './illustration-bread.svg'
import flower from './illustration-flower.svg'
import comb from './illustration-comb.svg'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='text'>
                <p>
                    Arıların mucizesi balın doğallığını korumak ve onu modern
                    yaşamın vazgeçilmez bir unsuru haline getirmek misyonu ile
                    yola çıkan Balparmak; Türkiye’nin lider bal markası
                    konumunda yer alıyor
                </p>
            </div>
            <div className='features'>
                <div className='comb'>
                    <img src={comb} alt='' srcset='' />
                    <h3>Güvenilir</h3>
                    <p>
                        Bal konusunda Avrupa’nın en kapsamlı dört
                        laboratuvarından birine sahip.
                    </p>
                </div>
                <div className='bread'>
                    <img src={bread} alt='' />
                    <h3>Yenilikçi</h3>
                    <p>
                        Katla Balla, Çıt Kapak gibi tüketicilerin ihtiyaçlarına
                        uygun, pratik ve yenilikçi ürünler geliştiriyor.
                    </p>
                </div>
                <div className='flower'>
                    <img src={flower} alt='' />
                    <h3>Doğal</h3>
                    <p>
                        Her zaman aynı lezzeti gözeterek saf balları özenle
                        derliyor ve analiz ediyor.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
