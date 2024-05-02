export const PageFooter = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="flex justify-center gap-6 pt-2">
            <div className="px-8 py-6">
                © 2023-{year} 透湖 Webポータル (clear-lake.net). All Rights Reserved
            </div>
        </footer>
    );
};