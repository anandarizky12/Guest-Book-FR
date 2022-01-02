import { deleteGuest, getAllGuests } from "../../actions/guest"
import Swal from 'sweetalert2';


// const showLoading = function() {
// .then(
//     () => {},
//     (dismiss) => {
//       if (dismiss === 'timer') {
//         console.log('closed by timer!!!!');
      
//       }
//     }
//   )
// };
export  const handleDelete = (dispatch,id) => {
  
    Swal.fire({
        title: 'Apakah Kamu Yakin?',
        text: "Aksi tidak dapat diulangi!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Hapus!',
        cancelButtonText: 'Batal'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Mohon Tunggu!',
            html: 'Proses . . .   ',// add html attribute if you want or remove
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading()
            },
        });
            dispatch(deleteGuest(id))
        }
      })
}


// Swal({ 
//   title: 'Finished!',
//   type: 'success',
//   timer: 2000,
//   showConfirmButton: false
// })