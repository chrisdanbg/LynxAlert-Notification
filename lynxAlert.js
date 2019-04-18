function lynxAlert(color,msg) {
    if (document.getElementById('nt-bdy')) {
        var element = document.getElementById('nt-bdy');
        element.parentNode.removeChild(element);
    }
        var notification = document.createElement("div");
        notification.classList.add('notification-body');
        notification.setAttribute("id", "nt-bdy");

        var notificationmsg = document.createElement("h5");
        notificationmsg.classList.add('notification-msg');
        notificationmsg.setAttribute("id", "nt-msg");

        notification.appendChild(notificationmsg);
        document.body.appendChild(notification);

        notification.classList.remove('goBack');
        notification.classList.add('animated');

        if (color === 'green') {
            notification.classList.add('green');
        } 
        else if (color === 'red')
        {
            notification.classList.add('red');
        }
        notificationmsg.innerHTML = msg;
        setTimeout(function () { animBack(); }, 2000);
    }

    function animBack() {
        var notification = document.getElementById('nt-bdy');
        notification.classList.remove('animated');
        notification.classList.add('goBack');
    }
