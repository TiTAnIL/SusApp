
export class Compose extends React.Component {

    state = {
        showModal: false,
        textColor: 'black',
        fontFamily: 'Courier New'
    }

    componentDidMount() { console.log('compose mount!') }

    showModal = () => {
        this.setState({ showModal: true })
    }

    hideModal = () => {
        this.setState({ showModal: false })
    }

    render() {
        return <section className="compose-new-msg">
            <Modal showModal={this.state.showModal} handleClose={this.hideModal} >
                <header className="new-msg-header">
                    <div className="header-elements">
                        <div className="new-msg-tag">New Message</div>
                        {/* <div className="header-btns"> */}
                        {/* <div className="new-msg-btns"> */}
                        {/* <img className="new-msg-resize new-msg-icon" src="assets/img/resize.png" /> */}
                        {/* </div> */}
                        {/* <div className="new-msg-btn"> */}
                        <img className="new-msg-close new-msg-icon" src="assets/img/close.png" onClick={this.hideModal} />
                    </div>
                    {/* </div> */}
                </header>
                <main className="new-msg-main">
                    <form className="new-msg-form">

                        <label htmlFor="subject">
                        </label>
                        <input type="text"
                            id="subject" placeholder="Subject">
                        </input>

                        <label id="recipents" placeholder="Recipents">
                        </label>
                        <input type="text"
                            id="recipents" placeholder="Recipents">
                        </input>

                        <label id="msg" className="msg-text-area"></label>
                        <textarea className="msg-text-area" id="msg"></textarea>

                        <footer className="new-msg-footer">
                            <section className="new-msg-up-controls">
                                <select name="Select" id="Select">
                                    <option value="Default">Courier New</option>
                                    <option value="1">Franklin</option>
                                    <option value="2">Gill Sans</option>
                                    <option value="3">Segoe UI</option>
                                    <option value="4">Times</option>
                                </select>
                                
                                <div className="new-msg-controls-btn"><img src="assets/img/tT.png"/></div>
                                <div className="new-msg-controls-btn"><img src="assets/img/Bold.png"/></div>
                                <div className="new-msg-controls-btn"><img src="assets/img/underline.png"/></div>
                                <div className="new-msg-controls-btn"><img src="assets/img/italic.png"/></div>
                                <div className="new-msg-controls-btn"><img src="assets/img/underline.png"/></div>
                                <div className="new-msg-controls-btn"><img src="assets/img/text-color.png"/></div>
                            </section>
                            <section className="new-msg-bottom-controls">
                                <button className="submit-msg" type="submit">Send</button>
                            </section>
                        </footer>
                    </form>
                </main>
            </Modal>
            <button className="compose-container" onClick={this.showModal}>
                <span className="compose-icon">
                </span>
                <span className="compose-text btn">Compose</span>
            </button>
        </section>
    }
}

const Modal = ({ handleClose, showModal, children }) => {
    const showHideClassName = showModal ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
            </section>
        </div>
    )
}


//     return <section className="compose-new-msg">
//                 <header className="new-msg-header">
//                     <div className="new-msg-tag">New Message</div>
//                     <div className="new-msg-btn">
//                         <img className="new-msg-resize-btn new-msg-icon" src="assets/img/resize.png" />
//                     </div>
//                     <div className="new-msg-btn">
//                         <img className="new-msg-close-btn new-msg-icon" src="assets/img/close.png" />
//                     </div>
//                     <div></div>
//                 </header>
//                 <main className="new-msg-main">
//                     <form className="new-msg-form">
//                         <label htmlFor="subject"></label>
//                         <input type="text" target="subject"
//                             id="subject" placeholder="Subject">
//                         </input>
//                         <label type="text" target="recipents"
//                             id="recipents" placeholder="Recipents">
//                         </label>
//                         <label htmlFor="msg"></label>
//                         <textarea id="msg" target="user_message"></textarea>
//                         <footer className="new-msg-footer">
//                             <section className="new-msg-up-controls">
//                                 <select name="Select" id="Select">
//                                     <option value="Default">field</option>
//                                     <option value="1">Field 1</option>
//                                     <option value="2">Fiel 2</option>
//                                     <option value="3">Field 3</option>
//                                     <option value="4">Fiel 4</option>
//                                 </select>
//                                 <div className="new-msg-controls-btn"></div>
//                                 <div className="new-msg-controls-btn"></div>
//                                 <div className="new-msg-controls-btn"></div>
//                                 <div className="new-msg-controls-btn"></div>
//                                 <div className="new-msg-controls-btn"></div>
//                                 <div className="new-msg-controls-btn"></div>
//                             </section>
//                             <section className="new-msg-bottom-controls">
//                                 <button className="submit-msg" type="submit"></button>
//                             </section>
//                         </footer>
//                     </form>
//                 </main>
//             </section>
// }
