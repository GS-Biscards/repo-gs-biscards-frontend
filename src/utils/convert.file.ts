export const convertDataToHTMLform = (data: any) => {
    const hiddenForm = document.createElement('form');
    hiddenForm.style.display = 'none';
    Object.entries(data).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = String(value);
        hiddenForm.appendChild(input);
    });
    document.body.appendChild(hiddenForm);
    console.log("hiddenForm", hiddenForm);
    
    return hiddenForm;
}