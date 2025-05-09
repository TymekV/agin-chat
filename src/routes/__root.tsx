import { createRootRoute, Outlet } from '@tanstack/react-router';
import '@/index.css';
import { ThemeProvider } from '@components/theme-provider';
import { MatrixClientProvider } from '@lib/providers/MatrixClient';
import { ModalsManagerProvider } from '@lib/modals';
import { AccountsProvider } from '@lib/providers/Accounts';
import { TitleProvider } from '@lib/providers/Title';
import { TooltipProvider } from '@components/ui/tooltip';

export const Route = createRootRoute({
    component: () => (
        <ThemeProvider defaultTheme="dark" storageKey="theme">
            <TooltipProvider>
                <AccountsProvider>
                    <MatrixClientProvider>
                        <ModalsManagerProvider>
                            <TitleProvider>
                                <Outlet />
                            </TitleProvider>
                        </ModalsManagerProvider>
                    </MatrixClientProvider>
                </AccountsProvider>
            </TooltipProvider>
            {/* <TanStackRouterDevtools /> */}
        </ThemeProvider>
    ),
});
