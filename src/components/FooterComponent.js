import React, {Component} from 'react';


class Footer extends Component{
    render(){
        return(
            <div classNam="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-9">
                            <h5>If you like my project/website,send me some support!</h5>
                        </div>
                        <div className="col-12 col-sm-3 align-self-right">
                            <a className="btn btn-social-icon btn-facebook" href="https://github.com/fishball2144"><i class="fa fa-github"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/hei-yuen-chan-8816b6167/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon" href="mailto:hychanbn1009@gmail.com"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;