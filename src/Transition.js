import React from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import './Transition.css'

const slides = [
    {
        title: 'Balparmak Süzme Çiçek Yayla Balı 850 g',
        price: 59.9,
        image:
            'https://www.balparmak.com.tr/suzme-cicek-yayla-bali-850-g-suzme-cicek-yayla-bali-balparmak-kavanoz-301-25-B.jpg',
    },
    {
        title: 'Balparmak Kestane Balı 460 g',
        price: 90,
        image:
            'https://www.balparmak.com.tr/kestane-bali-460-g-kestane-bali-balparmak-kavanoz-288-43-B.jpg',
    },
    {
        title: 'Balparmak Propolis Plus Yetişkin',
        price: 70,
        image:
            'https://www.balparmak.com.tr/propolis-plus-yetiskin-propolis-propolis-kutu-367-90-B.jpg',
    },
    {
        title: 'Balparmak Balkovan Süzme Çicek Balı 2 Kg',
        price: 100,
        image:
            'https://www.balparmak.com.tr/balkovan-suzme-cicek-bali-2-kg-balkovan-balkovan-pet-236-56-B.jpg',
    },
    {
        title: 'Balparmak Anadolu Lezzetleri Yüksekova Süzme Çiçek Balı 460 g',
        price: 49.5,
        image:
            'https://www.balparmak.com.tr/yuksekova-suzme-cicek-bali-yuksekova-bali-balparmak-kavanoz-429-10-B.jpg',
    },
]

function Transition() {
    return (
        <div className='all_slider'>
            <Slider>
                {slides.map((slide, index) => (
                    <div className='slider_content' key={index}>
                        <img src={slide.image} alt='image' srcset='' />
                        <p>{slide.title}</p>
                        <h2>{slide.price} TL</h2>
                        <button>Sepete Ekle</button>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Transition
