




function Pagar_Comprobante(tipo){



    Swal.fire({
        title: 'Confirmar Pago de Comprobante: '+tipo.dataset.comprobante,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Confirmar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {




          Swal.fire('Comprobante pagado!', '', 'success')



        } else if (result.isDenied) {



          Swal.fire('Cancelado', '', 'error')
        }
      })




}