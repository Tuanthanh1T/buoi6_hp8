document.addEventListener('DOMContentLoaded', function () {
    // Kiểm tra form đăng ký
    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();
        
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        if (!validateEmail(email)) {
            alert('Email không đúng cú pháp!');
            return;
        }

        const passwordValidationResult = validatePassword(password);
        if (passwordValidationResult !== true) {
            alert(passwordValidationResult);
            return;
        }

        alert('Đăng ký thành công!');
    });

    // Kiểm tra form đăng nhập
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (!validateEmail(email)) {
            alert('Email không đúng cú pháp!');
            return;
        }

        const passwordValidationResult = validatePassword(password);
        if (passwordValidationResult !== true) {
            alert(passwordValidationResult);
            return;
        }

        alert('Đăng nhập thành công!');
    });
});

// Hàm kiểm tra định dạng email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Hàm kiểm tra mật khẩu
function validatePassword(password) {
    if (password.length < 8) {
        return 'Mật khẩu phải có ít nhất 8 ký tự.';
    }

    if (!/[a-z]/.test(password)) {
        return 'Mật khẩu phải có ít nhất 1 ký tự chữ thường.';
    }

    if (!/[A-Z]/.test(password)) {
        return 'Mật khẩu phải có ít nhất 1 ký tự chữ hoa.';
    }

    if (!/\d/.test(password)) {
        return 'Mật khẩu phải có ít nhất 1 chữ số.';
    }

    if (!/[@$!%*?&]/.test(password)) {
        return 'Mật khẩu phải có ít nhất 1 ký tự đặc biệt (@$!%*?&).';
    }

    return true;
}

function exercise4 () {
    alert(`Đăng nhập thành công `);
}
