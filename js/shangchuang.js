
         
            function imgChange(obj1, obj2) {
                var fileNum1 = 0;
                var fileNum2 = event.target.files.length;
                var a = document.getElementById("z_photo"),
                    b = a.getElementsByTagName("div");
                fileNum1 = b.length;
                var j = fileNum1 + fileNum2 - 1;
                //上传图片个数限制
                if(fileNum1 > 5 || j > 5) {
                    alert("最多只能上传5张图片！");
                    return;
                }
                //获取点击的文本框
                var file = document.getElementById("file");
                //存放图片的父级元素
                var imgContainer = document.getElementsByClassName(obj1)[0];
                //获取的图片文件
                var fileList = file.files;
                //文本框的父级元素
                var input = document.getElementsByClassName(obj2)[0];
                var imgArr = [];
                //遍历获取到得图片文件
                for(var i = 0; i < fileList.length; i++) {
                    var imgUrl = window.URL.createObjectURL(file.files[i]);
                    imgArr.push(imgUrl);
                    var img = document.createElement("img");
                    img.setAttribute("src", imgArr[i]);
                    var imgAdd = document.createElement("div");
                    var imgAddInput = document.createElement("input");
                    imgAddInput.setAttribute("type", "hidden");
                    imgAddInput.setAttribute("value", imgArr[i]);
                    imgAdd.appendChild(imgAddInput);
                    imgAdd.setAttribute("class", "z_addImg");
                    imgAdd.appendChild(img);
                    imgContainer.appendChild(imgAdd);

                };
                file.classList.add("z_cl");
                imgRemove();
            };
            
            //删除图片
            function imgRemove() {
                var imgList = document.getElementsByClassName("z_addImg");
                var mask = document.getElementsByClassName("z_mask")[0];
                var cancel = document.getElementsByClassName("z_cancel")[0];
                var sure = document.getElementsByClassName("z_sure")[0];
                var file = document.getElementById("file");
                for(var j = 0; j < imgList.length; j++) {
                    imgList[j].index = j;
                    imgList[j].onclick = function() {
                        var t = this;
                        mask.style.display = "block";
                        cancel.onclick = function() {
                            mask.style.display = "none";
                        };
                        sure.onclick = function() {
                            mask.style.display = "none";

                            if(file.classList.contains("z_cl")) {
                                file.outerHTML = file.outerHTML;
                            }

                            t.parentNode.removeChild(t);
                            file.classList.remove("z_cl");
                        };

                    }
                };
            };

            
 