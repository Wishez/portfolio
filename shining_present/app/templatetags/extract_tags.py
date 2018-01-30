from django.template import  Library
from album.models import AlbumImage
register = Library()

@register.filter(name='extract_m2m')
def extract_m2m(m2m_field):
    query_set = m2m_field.all()
    return [item for item in query_set if item in query_set]

@register.filter(name="extract_images")
def extract_images(album):
    images = AlbumImage.objects.filter(album=album)
    return [image for image in images if image in images]
