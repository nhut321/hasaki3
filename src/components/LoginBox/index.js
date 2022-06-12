import loginFb from '../../assets/img/login-fb.jpg'
import loginGmail from '../../assets/img/login-gmail.jpg'
import Button from '../Button'
import './LoginBox.css'

export default function LoginBox() {
    return (
        <div className="login-box">
            <div className="login-box__item">
                <div className="login-box__item-label">
                    <span>Đăng nhập với</span>
                </div>
                <div className="social-login">
                    <a href="#" className='social-btn'>
                        <img src={loginFb} alt="" />
                    </a>
                    <a href="#" className='social-btn'>
                        <img src={loginGmail} alt="" />
                    </a>
                </div>
            </div>

            <div className="login-box__item">
                <div className="login-box__item-label">
                    <span>Hoặc đăng nhập với Sakura.vn</span>
                </div>
                <a href="#">
                    <Button name='Đăng nhập' type='btn-cus lg'/>
                </a>
                <div className="login-box__item-register">
                    <span>Bạn chưa có tài khoản?</span><a href="#">ĐĂNG KÝ NGAY</a>
                </div>
            </div>
        </div>
    )
}