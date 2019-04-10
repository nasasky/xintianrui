
	/*获得btn*/
    var btnw = document.getElementById('btnw')
    var spreadw = document.getElementById('spreadw')
    var iSpread = false
    /*高度*/
    var height = spreadw.scrollHeight
    /*总时间*/
    var time = 420;
    /*间隔*/
    var interval = 8.4
    /*速度*/
    var speed = height/(time/interval)
    /*点击事件*/
    btnw.onclick = function (e) {
        btnw.disabled = 'disabled'
        if(!iSpread){
            var speeds = 0
            var timer = setInterval(function () {
                speeds += speed
                spreadw.style.height = speeds + 'px'

                if(parseInt(spreadw.style.height) >=height){
                    clearTimeout(timer)
                    btnw.disabled = ''
                }
            },interval)
            this.innerHTML = '收起'
        }else {
            var speeds = height
            this.innerHTML = '展开'
            var timer = setInterval(function () {
                speeds -= speed
                spreadw.style.height = speeds + 'px'
                if(speeds <= 0){
                    clearTimeout(timer)
                    btnw.disabled = ''
                }
            },interval)
        }
        iSpread = !iSpread
    }




/*获得btn*/
    var btnh = document.getElementById('btnh')
    var spreadh = document.getElementById('spreadh')
    var iSpread = false
    /*高度*/
    var height = spreadh.scrollHeight
    /*总时间*/
    var time = 420;
    /*间隔*/
    var interval = 8.4
    /*速度*/
    var speed = height/(time/interval)
    /*点击事件*/
    btnh.onclick = function (e) {
        btnh.disabled = 'disabled'
        if(!iSpread){
            var speeds = 0
            var timer = setInterval(function () {
                speeds += speed
                spreadh.style.height = speeds + 'px'

                if(parseInt(spreadh.style.height) >=height){
                    clearTimeout(timer)
                    btnh.disabled = ''
                }
            },interval)
            this.innerHTML = '收起'
        }else {
            var speeds = height
            this.innerHTML = '展开'
            var timer = setInterval(function () {
                speeds -= speed
                spreadh.style.height = speeds + 'px'
                if(speeds <= 0){
                    clearTimeout(timer)
                    btnh.disabled = ''
                }
            },interval)
        }
        iSpread = !iSpread
    }




/*获得btn*/
    var btni = document.getElementById('btni')
    var spreadi = document.getElementById('spreadi')
    var iSpread = false
    /*高度*/
    var height = spreadi.scrollHeight
    /*总时间*/
    var time = 420;
    /*间隔*/
    var interval = 8.4
    /*速度*/
    var speed = height/(time/interval)
    /*点击事件*/
    btni.onclick = function (e) {
        btni.disabled = 'disabled'
        if(!iSpread){
            var speeds = 0
            var timer = setInterval(function () {
                speeds += speed
                spreadi.style.height = speeds + 'px'

                if(parseInt(spreadi.style.height) >=height){
                    clearTimeout(timer)
                    btni.disabled = ''
                }
            },interval)
            this.innerHTML = '收起'
        }else {
            var speeds = height
            this.innerHTML = '展开'
            var timer = setInterval(function () {
                speeds -= speed
                spreadi.style.height = speeds + 'px'
                if(speeds <= 0){
                    clearTimeout(timer)
                    btni.disabled = ''
                }
            },interval)
        }
        iSpread = !iSpread
    }




/*获得btn*/
    var btnj = document.getElementById('btnj')
    var spreadj = document.getElementById('spreadj')
    var iSpread = false
    /*高度*/
    var height = spreadj.scrollHeight
    /*总时间*/
    var time = 420;
    /*间隔*/
    var interval = 8.4
    /*速度*/
    var speed = height/(time/interval)
    /*点击事件*/
    btnj.onclick = function (e) {
        btnw.disabled = 'disabled'
        if(!iSpread){
            var speeds = 0
            var timer = setInterval(function () {
                speeds += speed
                spreadj.style.height = speeds + 'px'

                if(parseInt(spreadj.style.height) >=height){
                    clearTimeout(timer)
                    btnj.disabled = ''
                }
            },interval)
            this.innerHTML = '收起'
        }else {
            var speeds = height
            this.innerHTML = '展开'
            var timer = setInterval(function () {
                speeds -= speed
                spreadj.style.height = speeds + 'px'
                if(speeds <= 0){
                    clearTimeout(timer)
                    btnj.disabled = ''
                }
            },interval)
        }
        iSpread = !iSpread
    }






/*获得btn*/
    var btnk = document.getElementById('btnk')
    var spreadk = document.getElementById('spreadk')
    var iSpread = false
    /*高度*/
    var height = spreadk.scrollHeight
    /*总时间*/
    var time = 420;
    /*间隔*/
    var interval = 8.4
    /*速度*/
    var speed = height/(time/interval)
    /*点击事件*/
    btnk.onclick = function (e) {
        btnk.disabled = 'disabled'
        if(!iSpread){
            var speeds = 0
            var timer = setInterval(function () {
                speeds += speed
                spreadk.style.height = speeds + 'px'

                if(parseInt(spreadk.style.height) >=height){
                    clearTimeout(timer)
                    btnk.disabled = ''
                }
            },interval)
            this.innerHTML = '收起'
        }else {
            var speeds = height
            this.innerHTML = '展开'
            var timer = setInterval(function () {
                speeds -= speed
                spreadk.style.height = speeds + 'px'
                if(speeds <= 0){
                    clearTimeout(timer)
                    btnk.disabled = ''
                }
            },interval)
        }
        iSpread = !iSpread
    }




