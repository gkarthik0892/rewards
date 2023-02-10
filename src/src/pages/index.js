import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import ProductTile from './component/ProductTile'
import { Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] });
// Our data:
const products = [
  {
    "id": "1",
    "name": "Touareg",
    "image": "/product_img/Mazda_CX-9_2011_34_20_270_37_6_76_68_200_16_AWD_7_4_SUV_gJa.jpg",
    "cost": "120",
    "short_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    "bullet_description": [
      "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
      "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
      "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
      "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
    ]
  },
  {
    "id": "2",
    "name": "DeVille",
    "image": "/product_img/Chevrolet_Camaro_2019_31_18_270_20_4_74_52_188_20_RWD_4_2_Convertible_Xcu.jpg",
    "cost": "3474.41",
    "short_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    "bullet_description": [
      "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
      "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
      "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
      "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
    ]
  },
  {
    "id": "3",
    "name": "F250",
    "image": "/product_img/Jaguar_F-Pace_2017_41_18_180_20_4_76_65_186_26_AWD_5_4_SUV_Thp.jpg",
    "cost": "2878.07",
    "short_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    "bullet_description": [
      "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
      "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
      "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
      "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
    ]
  },
  {
    "id": "4",
    "name": "Corvette",
    "image": "/product_img/Bentley_Flying Spur_2011_181_19_550_60_12_77_55_208_11_AWD_5_4_4dr_FLx.jpg",
    "cost": "4379.01",
    "short_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    "bullet_description": [
      "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
      "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
      "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
      "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
    ]
  },
  {
    "id": "5",
    "name": "MKX",
    "image": "/product_img/Audi_R8_2017_189_19_610_52_10_76_48_174_14_AWD_2_2_2dr_nUS.jpg",
    "cost": "3274.66",
    "short_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    "bullet_description": [
      "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
      "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
      "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
      "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
    ]
  },
  {
    "id": "6",
    "name": "Accord",
    "image": "/product_img/Cadillac_CT6_2016_58_18_260_20_4_74_57_204_22_RWD_5_4_4dr_yfN.jpg",
    "cost": "758.8",
    "short_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    "bullet_description": [
      "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
      "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
      "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
      "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
    ]
  },
  {
    "id": "7",
    "name": "Suburban 2500",
    "image": "/product_img/Chevrolet_Silverado 2500HD_2017_54_20_360_60_8_80_78_nan_nan_RWD_5_4_Pickup_FvP.jpg",
    "cost": "2691.62",
    "short_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    "bullet_description": [
      "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
      "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
      "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
      "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
    ]
  },
  {
    "id": "8",
    "name": "LR2",
    "image": "/product_img/Porsche_Macan_2015_49_19_340_30_6_76_63_184_17_AWD_5_4_SUV_mjd.jpg",
    "cost": "4801.29",
    "short_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    "bullet_description": [
      "Capacity Spacious: The 2 person tent designed for a roomy and convenient experience. The camping tent with an interior center height of 47 inches and 82.7 x 82.7 inches base dimensions, it is a spacious camp tent with plenty of space for you",
      "Stable & Safe: To keep your camp equipment dry, the sturdy polyester material on the outdoor tent body and the removable rain fly help to ensure water does not make its way into the inside of your waterproof tent for a dry travel",
      "Ventilation Design: Large window design for enhanced airflow. A D-style door will keep an open view. Also, two person tent comes with a storage pocket that helps to clear clutter and keep the inside of the dome tent organized. Great tents for camping",
      "Easy Set-Up & Carry: The camp tent equip with 2 ropes and 6 stakes for safe and stable. It only takes 1-2 people 5 minutes to set up. The carry bag weighs only 5.7lbs. A lightweight tent can be store in the car without taking up much space"
    ]
  }
]


export default function Home() {
  const [cartValue, setCartValue] = useState(0);
  const [rewards, setRewards] = useState(0);
  useEffect(() => {
    if (cartValue > 100) {
      let tempRewards = 50;
      const tt = parseInt(cartValue - 100) * 2;
      console.log(tt);
      tempRewards = parseInt(parseInt(tempRewards) + tt);
      setRewards(tempRewards);
    }
  }, [cartValue]);
  const addValueToCart = (value) => {
    setCartValue(parseFloat(parseFloat(cartValue) + parseFloat(value)).toFixed(2));
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Grid container spacing={2}>
          <Typography data-id="cart" gutterBottom variant="h5" component="div">
            Cart Value : {cartValue}
          </Typography>
          <Typography gutterBottom marginLeft={4} variant="h5" component="div">
            Rewards : {rewards}
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          {
            products.map(p => {
              return <ProductTile key={p.id} addValueToCart={addValueToCart} product={p} />
            })
          }
        </Grid>
      </main>
    </>
  )
}
