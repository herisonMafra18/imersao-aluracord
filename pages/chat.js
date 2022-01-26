import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

export default function PaginaDoChat() {
    return (
        
        <Box
        styleSheet={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.primary[902],
        backgroundImage: 'url(https://cdn.ome.lt/jcA3r9wdtYdE7E1_785MeRoMv7A=/987x0/smart/uploads/conteudo/fotos/tanjiro-mugen-train-capa.jpg)',
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
        >
            </Box>
        )
        }


