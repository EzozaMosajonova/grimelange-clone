import React, { useState, useEffect, useRef } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    useMediaQuery,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Logo from '../../assets/logoblack.webp';
import ScrollingBanner from '../../components/marque/marque';

const categories = [
    {
        label: "Kadın",
        subcategories: [
            {
                label: "ÜST GİYİM",
                items: ["T-shirt", "Büstiyer", "Bluz", "Elbise", "Gömlek", "Atlet", "Sweatshirt", "Bodysuit", "Kazak"],
            },
            {
                label: "ALT GİYİM",
                items: ["Eşofman Altı", "Pantolon", "Jeans", "Etek", "Şort", "Tayt", "Çorap"],
            },
            {
                label: "DIŞ GİYİM",
                items: ["Yelek", "Ceket & Bomber", "Kadın Mont", "Parfüm", "Outlet", "Eşofman Takımı", "Alt-Üst Setler"],
            },
        ],
    },
    {
        label: "Erkek",
        subcategories: [
            {
                label: "ÜST GİYİM",
                items: ["T-shirt", "Gömlek", "Polo Yaka T-Shirt", "Sweatshirt", "Atlet", "Polar", "Kazak"],
            },
            {
                label: "ALT GİYİM",
                items: ["Eşofman Altı", "Pantolon", "Jeans", "Şort & Bermuda", "Deniz Şortu", "Çorap"],
            },
            {
                label: "DIŞ GİYİM",
                items: ["Mont", "Ceket", "Yelek", "Parfüm", "Outlet", "Eşofman Takımı", "Alt-Üst Takım"],
            },
        ],
    },
    {
        label: "Çocuk",
        subcategories: [
            {
                label: "KIZ ÇOCUK",
                items: ["Alt-Üst Setler", "Eşofman Takımı"],
            },
            {
                label: "ERKEK ÇOCUK",
                items: ["Alt-Üst Setler", "Eşofman Takımı"],
            },
            {
                label: "OUTLET",
                items: [],
            },
        ],
    },
    {
        label: "Urban beatga",
        subcategories: [
            {
                label: "ÜST GİYİM",
                items: ["Büstiyer", "Sweatshirt", "T-shirt", "Spor Sütyeni", "Body", "Atlet", "Spor Atlet", "Elbise"],
            },
            {
                label: "ALT GİYİM",
                items: [
                    "Eşofman Altı", "Tayt", "Spor Tayt", "Kapri & Bermuda", "Şort",
                    "Spor Şort", "Boxer", "Pantolon", "Spor Etek", "Etek", "Spor Eşofman Altı",
                ],
            },
        ],
    },
];

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentCategoryData, setCurrentCategoryData] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openCategory, setOpenCategory] = useState(null);
    const isMobile = useMediaQuery('(max-width:768px)');
    const closeTimer = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handlePopoverOpen = (event, category) => {
        clearTimeout(closeTimer.current);
        setAnchorEl(event.currentTarget);
        setCurrentCategoryData(category);
    };

    const handlePopoverClose = () => {
        closeTimer.current = setTimeout(() => {
            setAnchorEl(null);
            setCurrentCategoryData(null);
        }, 200);
    };

    const handlePopoverEnter = () => {
        clearTimeout(closeTimer.current);
    };

    const handleToggleCategory = (label) => {
        setOpenCategory(openCategory === label ? null : label);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-40 ${scrolled ? '' : ''}`}>
                <ScrollingBanner position="static" />
                <AppBar color="default" elevation={4} className="mt-7 mb-0">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {!isMobile && (
                            <Box sx={{ display: 'flex', gap: 4 }} onMouseLeave={handlePopoverClose}>
                                {categories.map((category) => (
                                    <Typography
                                        key={category.label}
                                        onMouseEnter={(e) => handlePopoverOpen(e, category)}
                                        sx={{ fontSize: '1.125rem', cursor: 'pointer', padding: '10px 0' }}
                                    >
                                        {category.label}
                                    </Typography>
                                ))}
                            </Box>
                        )}

                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                            <img src={Logo} alt="Logo" style={{ height: 60 }} />
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <IconButton><SearchIcon /></IconButton>
                            <IconButton><HomeIcon /></IconButton>
                            <IconButton><PhoneIcon /></IconButton>
                            <IconButton><ShoppingCartIcon /></IconButton>
                            {isMobile && (
                                <IconButton onClick={() => setMobileMenuOpen(true)}>
                                    <MenuIcon />
                                </IconButton>
                            )}
                        </Box>
                    </Toolbar>

                    {/* Popover for desktop */}
                    {!isMobile && anchorEl && currentCategoryData && (
                        <div
                            onMouseEnter={handlePopoverEnter}
                            onMouseLeave={handlePopoverClose}
                            style={{
                                position: 'fixed',
                                top: 84,
                                left: 0,
                                width: '100%',
                                backgroundColor: 'white',
                                padding: '40px 32px',
                                zIndex: 1399,
                                display: 'grid',
                                gap: '24px',
                                overflowY: 'auto',
                                maxHeight: '75vh',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '24px',
                                    overflowX: 'auto',
                                }}
                            >
                                {currentCategoryData.subcategories.map((subcat, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            minWidth: 180,
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <p style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
                                            {subcat.label}
                                        </p>
                                        {subcat.items.map((item, idx) => (
                                            <p
                                                key={idx}
                                                style={{
                                                    fontSize: '16px',
                                                    marginBottom: '4px',
                                                    cursor: 'pointer',
                                                    transition: '0.2s',
                                                }}
                                                onMouseOver={e => (e.currentTarget.style.color = '#1976d2')}
                                                onMouseOut={e => (e.currentTarget.style.color = 'black')}
                                            >
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                ))}
                            </div>

                        </div>
                    )}
                </AppBar>

                {/* Drawer for mobile */}
                <Drawer
                    anchor="left"
                    open={mobileMenuOpen}
                    onClose={() => setMobileMenuOpen(false)}
                    PaperProps={{ sx: { width: 280, backgroundColor: '#fff' } }}
                >
                    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <MenuIcon />
                                <Typography sx={{ ml: 1 }}>Menu</Typography>
                            </Box>
                            <IconButton onClick={() => setMobileMenuOpen(false)} sx={{ color: 'white' }}>
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>

                    <List>
                        {categories.map((category) => (
                            <Box key={category.label}>
                                <ListItem button onClick={() => handleToggleCategory(category.label)}>
                                    <ListItemText primary={category.label} />
                                    <ListItemIcon sx={{ minWidth: 'auto' }}>
                                        {openCategory === category.label ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemIcon>
                                </ListItem>
                                <Collapse in={openCategory === category.label} timeout="auto" unmountOnExit>
                                    {category.subcategories.map((sub) => (
                                        <Box key={sub.label} sx={{ pl: 3 }}>
                                            <ListItem>
                                                <ListItemText primary={sub.label} primaryTypographyProps={{ fontWeight: 'bold' }} />
                                            </ListItem>
                                            {sub.items.map((item) => (
                                                <ListItem key={item} sx={{ pl: 4 }}>
                                                    <ListItemText primary={item} />
                                                </ListItem>
                                            ))}
                                        </Box>
                                    ))}
                                </Collapse>
                                <Divider />
                            </Box>
                        ))}
                    </List>
                </Drawer>

                <Box sx={{ height: '120px' }} />
            </nav>
        </>
    );
}
