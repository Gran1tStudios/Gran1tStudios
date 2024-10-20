const f_btns = document.querySelectorAll('.f_btn');
const sections = document.querySelectorAll('section');
const top_btns = document.querySelectorAll('.top_btn');
const top_lists = document.querySelectorAll('.top_list');
const frens_list_block = document.querySelector('.frens_list_block');
const tasks_list = document.querySelector('.tasks_list');

for (let i = 0; i < f_btns.length; i++) {
    f_btns[i].addEventListener("click", function() {
        if (f_btns[i].classList.contains("active") != true) {
            [].forEach.call(f_btns, function (del) {
                del.classList.remove('active');
            });
            [].forEach.call(sections, function (del) {
                del.classList.remove('active');
            });
            f_btns[i].classList.add("active");
            sections[i].classList.add("active");
            sections[i].scrollTo({top: 0});
            if (i != 3) {
                if (top_btns[0].classList.contains("active") != true) {
                    [].forEach.call(top_btns, function (del) {
                        del.classList.remove('active');
                    });
                    [].forEach.call(top_lists, function (del) {
                        del.classList.remove('active');
                    });
                    top_btns[0].classList.add("active");
                    top_lists[0].classList.add("active");
                }
            }
            if (i == 3) {
                top_lists[0].scrollTo({top: 0});
            }
            if (i == 2) {
                frens_list_block.scrollTo({top: 0});
            }
            if (i == 1) {
                tasks_list.scrollTo({top: 0});
            }
        }
    });
};

for (let i = 0; i < top_btns.length; i++) {
    top_btns[i].addEventListener("click", function() {
        [].forEach.call(top_btns, function (del) {
            del.classList.remove('active');
        });
        [].forEach.call(top_lists, function (del) {
            del.classList.remove('active');
        });
        top_btns[i].classList.add("active");
        top_lists[i].classList.add("active");
        top_lists[i].scrollTo({top: 0});
    });
};