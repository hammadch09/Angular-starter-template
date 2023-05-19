import { Injectable } from '@angular/core';
import { getLocalStorage, setLocalStorage } from '@app/shared';
import { Theme } from '@app/shared/helpers/constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private isToggled = new BehaviorSubject<boolean>(false);

    private isDarkTheme!: boolean;
    private isSidebarDarkTheme!: boolean;
    private isRightSidebarTheme!: boolean;
    private isHideSidebarTheme!: boolean;
    private isHeaderDarkTheme!: boolean;
    private isCardBorderTheme!: boolean;
    private isCardBorderRadiusTheme!: boolean;
    private isRTLEnabledTheme!: boolean;

    constructor() {
        this.isDarkTheme = getLocalStorage(Theme.isDarkTheme);
        this.isSidebarDarkTheme = getLocalStorage(Theme.isSidebarDarkTheme);
        this.isRightSidebarTheme = getLocalStorage(Theme.isRightSidebarTheme);
        this.isHideSidebarTheme = getLocalStorage(Theme.isHideSidebarTheme);
        this.isHeaderDarkTheme = getLocalStorage(Theme.isHeaderDarkTheme);
        this.isCardBorderTheme = getLocalStorage(Theme.isCardBorderTheme);
        this.isCardBorderRadiusTheme = getLocalStorage(
            Theme.isCardBorderRadiusTheme
        );
        this.isRTLEnabledTheme = getLocalStorage(Theme.isRTLEnabledTheme);
    }

    /** Toggle Theme */
    toggleTheme = () => {
        this.isDarkTheme = !this.isDarkTheme;
        setLocalStorage(Theme.isDarkTheme, this.isDarkTheme);
    };

    /** Toggle Sidebar theme */
    toggleSidebarTheme = () => {
        this.isSidebarDarkTheme = !this.isSidebarDarkTheme;
        setLocalStorage(Theme.isSidebarDarkTheme, this.isSidebarDarkTheme);
    };

    /** Toggle Right Sidebar Theme */
    toggleRightSidebarTheme = () => {
        this.isRightSidebarTheme = !this.isRightSidebarTheme;
        setLocalStorage(Theme.isRightSidebarTheme, this.isRightSidebarTheme);
    };

    /** Toggle Hide Side Bar Theme */
    toggleHideSidebarTheme = () => {
        this.isHideSidebarTheme = !this.isHideSidebarTheme;
        setLocalStorage(Theme.isHideSidebarTheme, this.isHideSidebarTheme);
    };

    /** Toggle Header Dark Theme */
    toggleHeaderDarkTheme = () => {
        this.isHeaderDarkTheme = !this.isHeaderDarkTheme;
        setLocalStorage(Theme.isHeaderDarkTheme, this.isHeaderDarkTheme);
    };

    /** Toggle Card Border Theme */
    toggleCardBorderTheme = () => {
        this.isCardBorderTheme = !this.isCardBorderTheme;
        setLocalStorage(Theme.isCardBorderTheme, this.isCardBorderTheme);
    };

    /** Toggle Card Border Radius Theme */
    toggleCardBorderRadiusTheme = () => {
        this.isCardBorderRadiusTheme = !this.isCardBorderRadiusTheme;
        setLocalStorage(
            Theme.isCardBorderRadiusTheme,
            this.isCardBorderRadiusTheme
        );
    };

    /** Toggle RTL Enabled Theme */
    toggleRTLEnabledTheme = () => {
        this.isRTLEnabledTheme = !this.isRTLEnabledTheme;
        setLocalStorage(Theme.isRTLEnabledTheme, this.isRTLEnabledTheme);
    };

    /** Is Dark Theme Enabled */
    isDark = (): boolean => {
        return this.isDarkTheme;
    };

    /** Is Sidebar Dark */
    isSidebarDark = (): boolean => {
        return this.isSidebarDarkTheme;
    };

    /**
     * Is Right Sidebar Enabled
     * @returns
     */
    isRightSidebar = (): boolean => {
        return this.isRightSidebarTheme;
    };

    /**
     * Is Side bar Enabled
     * @returns
     */
    isHideSidebar = (): boolean => {
        return this.isHideSidebarTheme;
    };

    /**
     * Is Dark Header Enabled
     * @returns
     */
    isHeaderDark = (): boolean => {
        return this.isHeaderDarkTheme;
    };

    /** Is Card Border Enabled */
    isCardBorder = (): boolean => {
        return this.isCardBorderTheme;
    };

    /** Is Card Border Radius Enabled */
    isCardBorderRadius = (): boolean => {
        return this.isCardBorderRadiusTheme;
    };

    /**
     * Is RTL Enabled
     * @returns
     */
    isRTLEnabled = (): boolean => {
        return this.isRTLEnabledTheme;
    };

    /** Is Toggled Getter as Observable */
    get isToggled$() {
        return this.isToggled.asObservable();
    }

    /** Is Toggled */
    toggle() {
        this.isToggled.next(!this.isToggled.value);
    }
}
