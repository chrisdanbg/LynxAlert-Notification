window.onload = function () {
    if (sessionStorage.getItem('green')) {
        lynxAlert.greenDisplay(sessionStorage.getItem('green'));
        sessionStorage.clear();
    }
    else if (sessionStorage.getItem('red')) {
        lynxAlert.redDisplay(sessionStorage.getItem('red'));
        sessionStorage.clear();
    }
};

var lynxAlert = {
    Green(msg) {
        sessionStorage.setItem('green', msg);
    },

    Red(msg) {
        sessionStorage.setItem('red', msg);
    },

    greenDisplay(msg) {
        let notification = CreateNotification(msg);
        notification.classList.add('green');
    },

    redDisplay(msg) {
        let notification = CreateNotification(msg);
        notification.classList.add('red');
    }
}

function CreateNotification(message) {
    let notification = document.createElement("div");
    notification.classList.add('notification-body');
    notification.classList.add('lynxShadow');
    notification.setAttribute("id", "nt-bdy");

    let notificationmsg = document.createElement("h5");
    notificationmsg.classList.add('notification-msg');
    notificationmsg.setAttribute("id", "nt-msg");

    notification.appendChild(notificationmsg);
    document.body.appendChild(notification);

    notification.classList.remove('goBack');
    notification.classList.add('animated');

    notificationmsg.innerHTML = message;

    setTimeout(function () { AnimBack(notification); }, 2000);

    return notification;
}

function AnimBack(notification) {
    notification.classList.remove('animated');
    notification.classList.add('goBack');
    setTimeout(function () { notification.remove(); }, 2000);
}