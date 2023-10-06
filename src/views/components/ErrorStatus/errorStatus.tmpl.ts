export const template = `
    <div class="error-section">
        <div class="error-section__status-container">
            <div class="error-section__status stroked-title stroked-title_light-gray an-floating-1">{{ status }}</div>
            <div class="error-section__status stroked-title stroked-title_gray an-floating-2">{{ status }}</div>
            <div class="error-section__status stroked-title stroked-title_red  an-floating-3">{{ status }}</div>
        </div>
       
        <div class="error-section__message">{{ message }}</div>
        <a href={{ linkHref }} class="error-section__link msg-button is-dark">{{ linkText }}</a>
    </div>
`;
