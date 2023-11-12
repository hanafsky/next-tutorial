import {Inter, BIZ_UDGothic, Lusitana} from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    display: "swap"
})

export const bizudg = BIZ_UDGothic({
    weight: ["400","700"],
    subsets:['latin'],
    display:"swap" 
 })

export const lusitana = Lusitana({
    weight: ["400","700"],
    subsets:['latin']
})
// import { Google } from 'next/font/google';

// export const bizUDGothic = google({
//   family: 'BIZ+UDGothic',
//   weights: ['400', '700'], // 必要なウェイトを指定
// });
