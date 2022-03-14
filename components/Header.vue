<template>
  <header class="">
    <div class="container">
      <div class="row">
        <div class="mainheader">
          <NuxtLink to="/"
            ><img class="toplogo" src="images/logo.png" alt=""
          /></NuxtLink>
          <div class="rightheader">
            <!-- <a href="#" class="btn-dangnhap">
                            Đăng nhập
                        </a> -->
            <div class="topinfo">
              <div class="userinfomain">
                <img src="images/ava-default.jpg" alt="" class="avauser" />
                <div class="userinfo">
                  <span class="username">Alisaaliba</span>
                  <span class="gold">500.000 iXu</span>
                </div>
              </div>
              <a
                href="#"
                class="btnlist"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                ><i class="fa fa-bars" aria-hidden="true"></i
              ></a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a class="dropdown-item" href="#">Thông tin nhân vật</a>
                </li>
                <li><a class="dropdown-item" href="#">Lịch sử giao dịch</a></li>
                <li><a class="dropdown-item" href="#">Hướng dẫn nạp</a></li>
                <li><a class="dropdown-item" href="#">Đăng xuất</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import 
// export default {};
</script>