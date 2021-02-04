import '../style.css'
const Notification = ({notification, setNotification}) => {
    if(notification.content === null){
        return <div></div>
    }
    return <div className={notification.error===true?'error':'success'}><h3>{notification.content}</h3></div>
}

export default Notification