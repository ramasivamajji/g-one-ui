import Swal from "sweetalert2";


export const SweetAlertInfo = (imageUrl, title, text) => {
    Swal.fire({
        html: '<img class="rounded-circle" src="' + imageUrl + '" width="100vw" height="100vh" />' +
            '<br/>' +
            '<br/>' +
            '<h5 class="text-muted">' + title + '</h5>' +
            '<b>' + text + '</b>'
    });
}


export const SweetAlertGeneral = (title, text, icon) => {

    Swal.fire({
        title: title,
        text: text,
        icon: icon,

    });

}

export const SweetAlertLoginSuccess = () => {

    const Toast = Swal.mixin({
        toast: true,
        showConfirmButton: false,
        timer: 1500,
    })
    Toast.fire({
        title: "Signed in successfully",
        icon: "success"
    })

}

// export const SweetAlertGeneral = (title, text, icon) => {


//     // Swal.fire({
//     //     title: title,
//     //     text: text,
//     //     icon: icon,
//     //     timer: 20000,
//     //     // timerProgressBar: true,
//     //     showConfirmButton: false
//     // });
//     const Toast = Swal.mixin({
//         toast: true,
//         showConfirmButton: false,
//         timer: 1000,
//         // timerProgressBar: true,
//         // didOpen: (toast) => {
//         //     // toast.addEventListener('mouseenter', Swal.stopTimer)
//         //     // toast.addEventListener('mouseleave', Swal.resumeTimer)
//         //     // Swal.showLoading()
//         // }
//     })
//     Toast.fire({
//         title: title,
//         icon: icon
//     })
//     // .then((result) => {
//     //     /* Read more about handling dismissals below */
//     //     if (result.dismiss === Swal.DismissReason.timer) {
//     //         navigate("/services");
//     //     }
//     // })
// }

// export const SweetAlertLoginSuccess = () => {
//     Swal.fire({
//         title: 'Login Success',
//         timer: 2000,
//         timerProgressBar: true,
//         didOpen: () => {
//             Swal.showLoading()
//         },

//     })
// }
// import { HiOutlineMapPin } from "react-icons/hi2";

// export const SweetAlertInfo = (title, text) => {
//     Swal.fire({
//         title: title,
//         text: text,
//         icon: 'info',
//         confirmButtonColor: '#3085d6',
//         confirmButtonText: 'Ok',
//         iconHtml: <HiOutlineMapPin size={24} />,
//     });
// }

// import Swal from "sweetalert2";

// export const SweetAlertInfo = (title, text, icon) => {
//     Swal.fire({
//         title: title,
//         html: `<div class="d-flex align-items-center">${icon}<span class="ml-2">${text}</span></div>`,
//         showCloseButton: true,
//         focusConfirm: false,
//     });
// };
