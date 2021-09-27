import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={classes.con}>
            <img className={classes.img} src='https://avatars.mds.yandex.net/get-zen_doc/3453969/pub_5f0d5a879a510533f2a305ad_5f0d5d98ffa7730389fb55d2/scale_1200' alt='' />

            <div className={classes.profileInfo}>
                <img src='https://s1.1zoom.ru/big3/777/Big_cats_Snow_leopards_476037.jpg' alt='' />
                <div className={classes.inner}>
                    <div className={classes.contacts}>Имя: Алексей</div>
                    <div className={classes.contacts}>Дата создания: 3век до н.э.</div>
                    <div className={classes.contacts}>Контакты: телеграм</div>
                </div>
            </div>
        </div>
    );
};
export default ProfileInfo;
