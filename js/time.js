	var app = new Vue({
		el: '#popup',
		
		data: {
			switchShow: true,
			currentMonth: null,
			
			isFirstDay: 0,
			popupShow: false,
			isChoseTime: true,
			isChoseTimeShow: true,
			nextProtoWeek: null,
			nullDay: [],
			nextNullDay: [],
			dates: {
				nowMonth: [],
				nextMonth: []
			}
		},
		
		methods: {
			selectedNow: function(index, event) {
				
				for (date in this.dates.nowMonth){
					this.dates.nowMonth[date].current = false;
					
				}
				for (date in this.dates.nextMonth){
					this.dates.nextMonth[date].current = false;
					
				};
				
				if (!this.dates.nowMonth[index].appointment) {
					this.isChoseTimeShow = false;
				} else {
					this.isChoseTimeShow = true;
					this.isChoseTime = true;
				}
				
				this.isFirstDay = index;
				console.log(this.isFirstDay);
				this.tableHide();
				this.dates.nowMonth[index].current = true;
				
			},
			selectedNext: function(index, event) {
				
				for (date in this.dates.nextMonth){
					this.dates.nextMonth[date].current = false;
					
				}
				for (date in this.dates.nowMonth){
					this.dates.nowMonth[date].current = false;
					
				};
				
				if (!this.dates.nextMonth[index].appointment) {
					this.isChoseTimeShow = false;
				} else {
					this.isChoseTimeShow = true;
					this.isChoseTime = true;
				}					
				
				this.isChoseTime = true;
				this.tableHide();

				this.dates.nextMonth[index].current = true;
				
			},
			
			tableShow: function() {
			
				this.switchShow = false;
				
			},
			
			tableHide: function() {
			
				this.switchShow = true;
				
			},
			
			timeChose: function(key, event) {
				this.isChoseTime = false;
				$(event.target).siblings().removeClass('chosed');
				$(event.target).addClass('chosed'); 
				
			},
			
			notChoseTime: function() {
				this.isChoseTime = true;
			},
			
			popupHide: function() {
				popupShow = false;
			},
			
			// submit
			submitFunc: function() {
				var time, choseH, subInfo;
				
				for (ts in this.dates.nowMonth) {
					if (this.dates.nowMonth[ts].current == true) {
						time = this.dates.nowMonth[ts];
					}
				}
				for (tc in this.dates.nextMonth) {
					if (this.dates.nextMonth[tc].current == true) {
						time = this.dates.nextMonth[tc];
					}
				}
				
				var choseHours = $('.hour-this');
				var noSel = $('.no-sel');
				

				if(noSel.hasClass('not-chose-time')) {
					choseH = null;
				} else {
				
					for (var h = 0; h < choseHours.length; h++) {
						if(choseHours.eq(h).hasClass('chosed')) {
							choseH = choseHours.eq(h).text();
						}
					}	
					
				}
			
				
				subInfo = {
					"day": time,
				
				}
				console.log(subInfo);
			}
		},
		
		created: function() {
		
			var totalDays = 7,
			         
					date = new Date(),
					currentYears = date.getFullYear(),
					week =Array('周日', '周一', '周二', '周三', '周四', '周五', '周六'),
					currentMonth = date.getMonth() + 1,
					currentDay = date.getDate(),
					protoWeek = date.getDay(),
					currentHours = date.getHours(),
					hours = [
						
					];
					
			this.currentYears =	currentYears;	
			this.currentMonth =	currentMonth;	
			this.currentDay =	currentDay;
		
			console.log(this.currentDay);
			
			for (var i = 0; i < totalDays; i++) {
			
				var month = date.getMonth() + 1,
						day = date.getDate(),
						proteWeek = date.getDay(),
						timestamp = date.getTime(),
						appointment = true;
						
						if(proteWeek == 0 || proteWeek == 6) {
							appointment = false;
						}
						
				var	d = {
							'timestamp': timestamp,
							'appointment': appointment,
							'month': month,
							'day': day,
							'proteWeek': proteWeek,
							'week': week[proteWeek], 
							
							'current': false
						};
				
				if (month == currentMonth) {
					this.dates.nowMonth.push(d);
				} else {
					this.dates.nextMonth.push(d);
				}
				
				date.setDate(date.getDate() + 1);
			}
			
			
			this.dates.nowMonth[0].current = true;
		
			console.log(this.nextProtoWeek);
			console.log(this.dates);
								
			for(var j = 0; j < protoWeek; j++) {
			
				this.nullDay.push("");
				
			}
			
			for(var k = 0; k < this.nextProtoWeek; k++) {
			
				this.nextNullDay.push("");
				
			}
		} 
	})