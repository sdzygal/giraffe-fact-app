import {GiraffeImg, ImgService} from "./types";
import { imgUrl_1, imgUrl_2, imgUrl_3, imgUrl_4, imgUrl_5, imgUrl_6, imgUrl_7, imgUrl_8, imgUrl_9, imgUrl_10, imgUrl_11, imgUrl_12, imgUrl_13, imgUrl_14, imgUrl_15, imgUrl_16, imgUrl_17, imgUrl_18, imgUrl_19,
    imgUrl_20, imgUrl_21, imgUrl_22, imgUrl_23, imgUrl_24, imgUrl_25, imgUrl_26, imgUrl_27, imgUrl_28, imgUrl_29, imgUrl_30, imgUrl_32, imgUrl_33, imgUrl_34, imgUrl_35, imgUrl_36, imgUrl_37,
    imgUrl_38, imgUrl_39, imgUrl_40, imgUrl_41, imgUrl_42, imgUrl_43, imgUrl_44, imgUrl_45, imgUrl_46, imgUrl_47, imgUrl_48, imgUrl_49, imgUrl_50, imgUrl_51 } from "./import";


export const giraffeImages: GiraffeImg[] = [
    { img: imgUrl_1 },
    { img: imgUrl_2 },
    { img: imgUrl_3 },
    { img: imgUrl_4 },
    { img: imgUrl_5 },
    { img: imgUrl_6 },
    { img: imgUrl_7 },
    { img: imgUrl_8 },
    { img: imgUrl_9 },
    { img: imgUrl_10 },
    { img: imgUrl_11 },
    { img: imgUrl_12 },
    { img: imgUrl_13 },
    { img: imgUrl_14 },
    { img: imgUrl_15 },
    { img: imgUrl_16 },
    { img: imgUrl_17 },
    { img: imgUrl_18 },
    { img: imgUrl_19 },
    { img: imgUrl_20 },
    { img: imgUrl_21 },
    { img: imgUrl_22 },
    { img: imgUrl_23 },
    { img: imgUrl_24 },
    { img: imgUrl_25 },
    { img: imgUrl_26 },
    { img: imgUrl_27 },
    { img: imgUrl_28 },
    { img: imgUrl_29 },
    { img: imgUrl_30 },
    { img: imgUrl_32 },
    { img: imgUrl_33 },
    { img: imgUrl_34 },
    { img: imgUrl_35 },
    { img: imgUrl_36 },
    { img: imgUrl_37 },
    { img: imgUrl_38 },
    { img: imgUrl_39 },
    { img: imgUrl_40 },
    { img: imgUrl_41 },
    { img: imgUrl_42 },
    { img: imgUrl_43 },
    { img: imgUrl_44 },
    { img: imgUrl_45 },
    { img: imgUrl_46 },
    { img: imgUrl_47 },
    { img: imgUrl_48 },
    { img: imgUrl_49 },
    { img: imgUrl_50 },
    { img: imgUrl_51 }
];

export const imgService: ImgService = {
    getRandomImg: () => {
        const randomItem = Math.floor(Math.random() * giraffeImages.length);
        return giraffeImages[randomItem];
    },
};