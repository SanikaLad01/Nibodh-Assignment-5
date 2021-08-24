import React from 'react'

export default function Header() {
    return (
<div className="row header_container_dark ">
<div className="col-6 d-flex ">
<div className="icon">
<i class="fab fa-facebook-square"></i>
<i class="fab fa-linkedin"></i>
<i class="fab fa-pinterest-square"></i>
<i class="fab fa-instagram-square"></i>

</div>

<div className="phone">
+9833546510
</div>
</div>

<div className="col-6">
<div className="loginsignup">

<button><i class="far fa-user"></i> &nbsp; SIGNUP</button>
&nbsp;
&nbsp;
<button><i class="fas fa-user-lock"></i> &nbsp; LOGIN</button>

</div>
</div>
</div>
    )
}