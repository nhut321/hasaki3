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
                <a href="#">
                    <img src={loginFb} alt="" />
                </a>
                <a href="#">
                    <img src={loginGmail} alt="" />
                </a>
            </div>

            <div className="login-box__item">
                <div className="login-box__item-label">
                    <span>Hoặc đăng nhập với Sakura.vn</span>
                </div>
                <a href="#">
                    <Button name='Đăng nhập' type='btn-cus lg'/>
                </a>
            </div>
        </div>
    )
}