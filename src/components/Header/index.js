import headerTop from '../../assets/img/ship.jpg'
import logo from '../../assets/img/logo1.png'
import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <div className='header-top'>
                <img src={headerTop} alt="ship-img"/>
            </div>
            <div className='header-bottom'>
                <div className="header-bottom__left">
                    <div className="header-bottom__left-hambur">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="header-bottom__left-logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="header-bottom__center">
                    <div className="header-bottom__center-search-demo">
                        <div className="search-demo__list">
                            <div className="search-demo__item">
                                <a href="#">Kem chống nắng</a>
                            </div>
                            <div className="search-demo__item">
                                <a href="#">Kem tẩy trang</a>
                            </div>
                            <div className="search-demo__item">
                                <a href="#">Sữa rửa mặt</a>
                            </div>
                            <div className="search-demo__item">
                                <a href="#">Tẩy tế bào chết</a>
                            </div>
                        </div>
                    </div>
                    <form className="header-bottom__center-search-form">
                        <div className="search-form__input">
                            <input type="text" />
                        </div>
                        <div className="search-form__btn">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </form>
                </div>
                <div className="header-bottom__right">
                    <div className="hearder-bottom__right-list">
                        <div className="header-bottom__right-item">
                            <div className="header-bottom__right-item-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="header-bottom__right-item-text">
                                Giỏ hàng
                            </div>
                        </div>

                        <div className="header-bottom__right-item">
                            <div className="header-bottom__right-item-icon">
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <div className="header-bottom__right-item-text">
                                Giỏ hàng
                            </div>
                        </div>

                        <div className="header-bottom__right-item">
                            <div className="header-bottom__right-item-icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="header-bottom__right-item-text">
                                Giỏ hàng
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}