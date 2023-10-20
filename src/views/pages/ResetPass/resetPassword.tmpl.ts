export const template = `
    <div class="container">
        <div class="center-content">
            <div class="base-form-wrapper">
                <div class="base-form__title">{{ title }}</div>
                <form class="base-form">
                    <div class="base-form__fields">
                        <label for="password"
                               class="base-form__field"
                        >
                            <span class="base-form__label">{{ passwordLabel }}</span>
                            
                            <input id="password" 
                                   class="base-form__input"
                                   placeholder="{{ this.passwordPlaceholder }}"
                                   name="password"
                                   type="password"
                            />
                        </label>
                        
                        <label for="repeat_password"
                               class="base-form__field"
                        >
                            <span class="base-form__label">{{ repeatPasswordLabel }}</span>
                            
                            <input id="password" 
                                   class="base-form__input"
                                   placeholder="{{ this.repeatPasswordPlaceholder }}"
                                   name="repeat_password"
                                   type="password"
                            />
                        </label>
                    </div>
        
                    <div class="base-form__buttons">
                        <button class="msg-button wide is-primary"
                                type="submit"
                        >
                            {{ buttonText }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
`
