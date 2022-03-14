<template>
	<div>
			<div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
				<div class="offcanvas-header">
					<div class="container1">
						<h5 class="offcanvas-title" id="offcanvasBottomLabel">Chưa đăng nhập</h5>
						<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
				  </div>
				  <div class="offcanvas-body">
					  <div class="container">
						<div class="chuadangnhap">
						  	<p><span class="text-center">Bạn chưa đăng nhập vui lòng đăng nhập để tiếp tục</span></p>
							<div class="col-12">
								<button class="btn xacnhan btn-primary" type="submit">Kiểm tra</button>
							</div>
						  </div>
					</div>
				  </div>
			</div>
			<section class="user">
				<div class="container">
					<div class="infouser">
						<img src="images/icongames.jpg" alt="" class="ava-info" />
						<div class="userinfo">
							<h5 class="username">ChipuCu128 <i class="fa fa-diamond" aria-hidden="true"></i></h5>
							<p class="taikhoan">Tài khoản: chipucu999999</p>
							<p class="uid">UID: 12923645873</p>
						</div>
					</div>
				</div>
			</section>
			<section class="user-content">
				<div class="container">
					<div class="hoivien">
						<ul class="row">
							<li class="col-sm-4 col-12"><h4 class="mb-2 mb-sm-0">Hội Viên</h4></li>
							<li class="col-sm-4 col-12"><h4 class="mb-2 mb-sm-0">Đặc quyền siêu cấp</h4></li>
							<li class="col-sm-4 col-12"><a href="#" class="buy">Mua</a></li>
						</ul>
					</div>
					<div class="user-money">
						<div class="ixu">
							<img src="images/ixu.png" alt="" class="img-ixu" />
							<div class="ixu-info">
								<span>iXu</span>
								<span class="ixu-gold">500.000</span>
							</div>
						</div>
						<div class="ixu itap-token">
							<img src="images/token.png" alt="" class="img-ixu" />
							<div class="ixu-info">
								<span>iXu</span>
								<span class="ixu-gold">500.000</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="chucnang mt-3">
				<div class="container">
					<h5 class="chucnang-title mb-2">Chức năng</h5>
					<ul class="chucnang-list">
						<li><a href="#" class="baodanh"><img src="images/calendar.png" alt=""/><span>Báo danh</span></a></li>
						<li><a href="#" class="baodanh"><img src="images/flashsale.png" alt=""/><span>Flash sale</span></a></li>
						<li><a href="#" class="baodanh"><img src="images/nhiemvu.png" alt=""/><span>Nhiệm vụ</span></a></li>
						<li><a href="#" class="baodanh"><img src="images/member.png" alt=""/><span>Hội viên VIP</span></a></li>
						<li><a href="#" class="baodanh"><img src="images/chuyentoken.png" alt=""/><span>Chuyển token</span></a></li>
						<li><a href="#" class="baodanh"><img src="images/chotoken.png" alt=""/><span>Chợ token</span></a></li>
						<li><a href="#" class="baodanh"><img src="images/qua.png" alt=""/><span>Giftcode</span></a></li>
						<li><a href="#" class="baodanh"><img src="images/itaptoken.png" alt=""/><span>iTap Token</span></a></li>
					</ul>
				</div>
			</section>
			<p><a href="#" class="banner"><img src="images/banner.png" alt=""/></a></p>
			<div class="category mt-3">
				<div class="container">
					<ul class="list-group list-group-flush">
					  <li class="list-group-item" onclick="location.href='#';"><div class="leftlist"><i class="fa fa-history" aria-hidden="true"></i> Lịch sử giao dịch</div><i class="fa fa-chevron-right" aria-hidden="true"></i></li>
					  <li class="list-group-item" onclick="location.href='#';"><div class="leftlist"><i class="fa fa-user-circle-o" aria-hidden="true"></i> Cập nhật thông tin</div><i class="fa fa-chevron-right" aria-hidden="true"></i></li>
						<li class="list-group-item" onclick="location.href='#';"><div class="leftlist"><i class="fa fa-lock" aria-hidden="true"></i> Bảo mật tài khoản</div><i class="fa fa-chevron-right" aria-hidden="true"></i></li>
					</ul>
				</div>
			</div>
	</div>
	
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>