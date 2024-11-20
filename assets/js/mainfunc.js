// upload logo company master

var isUpload;
var filebtn = $('#upload-btn, #filePhoto');
function readURL(filebtn) {
    for (var i = 0; i < filebtn.files.length; i++) {
        if (filebtn.files[i]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var img = $('.uploader img.upload-img');
                img.attr('src', e.target.result);
            }
            reader.readAsDataURL(filebtn.files[i]);
        }
    }
}
$("#upload-btn, #filePhoto").change(function () {
    readURL(this);
});
if (isUpload) {
    var $form = $('.uploader');
    var droppedFiles = false;
    $form.on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
    $form.on('dragover dragenter', function () {
      $form.addClass('is-dragover');
    })
      .on('dragleave dragend drop', function () {
      $form.removeClass('is-dragover');
    })
      .on('drop', function (e) {
      droppedFiles = e.originalEvent.dataTransfer.files;
    });

}

function handleImageBorder() {
    const uploaderElements = document.querySelectorAll('.uploader');

    uploaderElements.forEach(element => {
        const img = element.querySelector('.upload-img');
        
        // Listen for changes in the file input
        const input = element.querySelector('input[type="file"]');
        input.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    img.setAttribute('src', e.target.result);
                    element.style.border = 'none'; // Remove border when image is uploaded
                };
                reader.readAsDataURL(this.files[0]);
            } else {
                img.removeAttribute('src');
                element.style.border = '1px dashed black'; // Add border when no image is uploaded
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', handleImageBorder);



// Upload Company master end




$(document).ready(function() {
    // Function to handle click event
    function handleClick() {
        if ($(window).width() > 768) {
            // Screen width greater than 768px
            $(".rootpage").toggleClass("navcollapse");
            $(".expandbtn").toggleClass("collapsebtn");
        } else {
            // Screen width 768px or smaller
            $(".rootpage").toggleClass("mblnavexpand");
            $(".expandbtn").toggleClass("ssss");
        }
    }
    
    // Initial binding of click event
    $(".expandbtn").click(handleClick);
    
    // Re-bind click event on window resize
    $(window).resize(function() {
        $(".expandbtn").off("click", handleClick); // Remove previous click event
        $(".expandbtn").click(handleClick); // Re-bind click event based on new window size
        $(".rootpage").removeClass("navcollapse");
        $(".expandbtn").removeClass("collapsebtn");
        

    });
});
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const rootpage = document.querySelector('.rootpage');

    if (dropdownToggles.length > 0 && rootpage) {
        dropdownToggles.forEach(function(dropdownToggle) {
            dropdownToggle.addEventListener('click', function() {
                if (rootpage.classList.contains('navcollapse')) {
                    rootpage.classList.remove('navcollapse');
                }
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const collapseAllBtn = document.getElementById('collapseAllBtn');

    if (collapseAllBtn) {
        collapseAllBtn.addEventListener('click', function() {
            // Get all elements with class .collapse that are currently shown
            const collapsibleElements = document.querySelectorAll('.collapse.show');

            // Loop through each collapsible element and hide it
            collapsibleElements.forEach(function(element) {
                element.classList.remove('show');
                // If using Bootstrap, update aria-expanded attribute
                const toggleBtn = document.querySelector('[data-bs-target="#' + element.id + '"]');
                if (toggleBtn) {
                    toggleBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});



// $(document).ready(function() {
//     // Function to handle checkbox change
//     function handleCheckboxChange() {
//         if ($(window).width() > 768) {
//             // Screen width greater than 768px
//             $(".rootpage").toggleClass("navcollapse");
//             $(".expandcheckbox").prop("checked", $(".rootpage").hasClass("navcollapse"));
//         } else {
//             // Screen width 768px or smaller
//             $(".rootpage").toggleClass("mblnavexpand");
//             $(".expandcheckbox").prop("checked", $(".rootpage").hasClass("mblnavexpand"));
//         }
//     }
    
//     // Initial binding of checkbox change event
//     $(".expandcheckbox").change(handleCheckboxChange);
    
//     // Re-bind checkbox change event on window resize
//     $(window).resize(function() {
//         $(".expandcheckbox").off("change", handleCheckboxChange); // Remove previous change event
//         $(".expandcheckbox").change(handleCheckboxChange); // Re-bind change event based on new window size
        
//         // Reset classes and checkbox state on resize
//         $(".rootpage").removeClass("navcollapse mblnavexpand");
//         $(".expandcheckbox").prop("checked", false);
//     });
// });
